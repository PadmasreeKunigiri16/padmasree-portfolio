"use client";

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Statement from '@/components/Statement';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Journey from '@/components/Journey';
import CtaBanner from '@/components/CtaBanner';
import TechStack from '@/components/TechStack';
import LatestWorks from '@/components/LatestWorks';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function Home() {
    useEffect(() => {
        // Handle hash scrolling on page load (e.g. from /#stack)
        if (window.location.hash) {
            setTimeout(() => {
                const element = document.querySelector(window.location.hash);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }, 100); // slight delay to ensure DOM is fully painted
        }

        // Smooth scrolling for anchor links
        const handleScroll = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                const targetId = target.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        };
        
        document.addEventListener('click', handleScroll);

        // Intersection Observer for animations on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-up').forEach(element => {
            element.style.animationPlayState = 'paused';
            observer.observe(element);
        });

        return () => {
            document.removeEventListener('click', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Statement />
                <TechStack />
                <CtaBanner />
            </main>
            <Footer />
        </>
    );
}
