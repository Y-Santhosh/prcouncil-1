"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { AiOutlineCalendar, AiOutlineUser, AiOutlineClockCircle, AiOutlineLink } from "react-icons/ai";
import Squares from "../components/Squares";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero: React.FC = () => {
  const [events, setEvents] = useState<Array<{ id: string; [key: string]: any }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const eventsQuery = query(
      collection(db, "events"),
      orderBy("date", "desc"),
      orderBy("time", "desc"),
      limit(3)
    );

    const unsubscribe = onSnapshot(eventsQuery, (snapshot) => {
      const eventsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const memoizedEvents = useMemo(() => events, [events]);

  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      <div className="relative h-[85vh] overflow-hidden">
        <Squares speed={0.3} squareSize={40} direction="diagonal" borderColor="rgba(255, 255, 255, 0.1)" hoverFillColor="#ace501" />
        <main className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center mt-[-80px]">

        <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-4xl md:text-6xl font-extrabold text-lime-400 tracking-tight drop-shadow-lg">
            Welcome to
          </motion.h1>
          <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" className="text-3xl md:text-5xl font-bold text-white mt-4">
            Public Relations Council
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="text-sm md:text-base text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Building bridges, fostering connections, and shaping the future of public engagement.
          </motion.p>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-10">
            <button aria-label="View Latest Events" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-gray-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 hover:text-white">
              <a href="#events">Latest Events</a>
            </button>
          </motion.div>
        </main>
        
      </div>

      <div className="relative z-10 mt-1 w-full px-6 flex flex-col justify-center items-center bg-black text-center py-20" id="events">
        <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-5xl font-bold text-lime-400 mb-6">
          Latest Events
        </motion.h3>
        {loading ? (
          <p className="p-10 text-gray-400 text-lg animate-pulse">🚀 Hang on tight... fetching the latest events!</p>
        ) : memoizedEvents.length === 0 ? (
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-gray-400 mt-12">
            No events found. Try adjusting your filters.
          </motion.div>
        ) : (
          <motion.div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {memoizedEvents.map((event, index) => (
              <motion.div key={event.id} className="bg-gray-900 text-gray-200 rounded-xl shadow-lg p-6 flex flex-col space-y-4 transform hover:scale-105 transition-all relative" whileHover={{ scale: 1.05 }} initial="hidden" animate="visible" transition={{ delay: index * 0.1, duration: 0.6 }}>
                <h4 className="text-xl font-bold text-lime-400 truncate" title={event.eventTitle}>{event.eventTitle}</h4>
                <div className="flex items-center space-x-2"><AiOutlineUser className="text-lime-400" /><span className="text-sm">{event.user}</span></div>
                <div className="flex items-center space-x-2"><AiOutlineCalendar className="text-lime-400" /><span className="text-sm">{event.date}</span></div>
                <div className="flex items-center space-x-2"><AiOutlineClockCircle className="text-lime-400" /><span className="text-sm">{event.session}</span></div>
                <div className="flex items-center space-x-2"><AiOutlineLink className="text-lime-400" /><a href={event.driveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Drive Link</a></div>
                {Array.isArray(event.pictureCredits) && event.pictureCredits.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2"><span className="text-sm text-gray-400">Picture Credits:</span>{event.pictureCredits.map((credit, idx) => (<span key={idx} className="text-sm text-gray-400">{credit}</span>))}</div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
        <div className="mt-12">
          <button aria-label="Browse All Events" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-gray-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 hover:text-white">
            <a href="/events">Browse All Events</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
