'use client';

import { motion } from 'framer-motion';

export default function Template({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                ease: [0.25, 0.1, 0.25, 1], 
                duration: 0.6 
            }}
            style={{ width: '100%', height: '100%', flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}
        >
            {children}
        </motion.div>
    );
}
