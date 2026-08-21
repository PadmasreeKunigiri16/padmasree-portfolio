import { NextResponse } from 'next/server';

const USERNAME = 'padmasree16_kunigiri';

const query = `
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    profile {
      ranking
    }
    submitStats: submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
      }
    }
    badges {
      id
      displayName
    }
  }
}
`;

export async function GET() {
    try {
        const res = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Referer': 'https://leetcode.com',
            },
            body: JSON.stringify({ query, variables: { username: USERNAME } }),
            next: { revalidate: 3600 }, // cache for 1 hour
        });

        if (!res.ok) throw new Error('LeetCode API error');

        const data = await res.json();
        const user = data?.data?.matchedUser;

        if (!user) throw new Error('User not found');

        const stats = user.submitStats.acSubmissionNum;
        const total = stats.find(s => s.difficulty === 'All');
        const easy  = stats.find(s => s.difficulty === 'Easy');
        const medium= stats.find(s => s.difficulty === 'Medium');
        const hard  = stats.find(s => s.difficulty === 'Hard');

        return NextResponse.json({
            ranking: user.profile.ranking,
            totalSolved: total?.count ?? 0,
            easySolved: easy?.count ?? 0,
            mediumSolved: medium?.count ?? 0,
            hardSolved: hard?.count ?? 0,
            badges: user.badges?.length ?? 0,
        });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
