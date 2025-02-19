"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const teammembers = {
  'Overall lead': [
    {
      name: 'Ashutosh Govind Singh',
      role: 'Mentor',
      photo: 'members/ashutosh.jpg',
      linkedin: 'https://www.linkedin.com/in/ashwhotosh/',
      email: 'cs22b1013@iiitr.ac.in',
    },
    {
      name: 'K V Jaya Harsha',
      role: 'Secretary 1',
      photo: 'members/harsha.png',
      linkedin: 'https://www.linkedin.com/in/kvjharsha/',
      email: 'cs23b1034@iiitr.ac.in',
    },
    {
      name: 'G Jashwanth',
      role: 'Secretary 2',
      photo: 'members/jashwanth.png',
      linkedin: 'https://www.linkedin.com/in/jashwanth-guguloth-411017283/',
      email: 'ad23b1020@iiitr.ac.in',
    },
  ],
  
  'Shutter Squad': [
    {
      name: 'S Jaswanth',
      role: 'Shutter Squad Lead',
      photo: 'members/s-jaswanth.jpeg',
      linkedin: 'https://www.linkedin.com/in/jaswanth-sunkara-21292a29a',
      email: 'cs23b1073@iiitr.ac.in',
    },
    {
      name: 'Santhosh',
      role: 'Core Team',
      photo: 'members/santhosh.png',
      linkedin: 'https://www.linkedin.com/in/santhosh-yanamadni-801b56299',
      email: 'ad23b1060@iiitr.ac.in',
    },
    {
      name: 'B Vasudevareddy',
      role: 'Core Team',
      photo: 'members/vasu.png',
      linkedin: 'https://www.linkedin.com/in/byreddy-vasudevareddy-5525942a7',
      email: 'ad23b1013@iiitr.ac.in', 
    }, 
    {
      name: 'V Sowmya',
      role: 'Core Team',
      photo: 'members/sowmya.png',
      linkedin: 'https://www.linkedin.com/in/sowmya-vadde-5b82052b6',
      email: 'cs23b1077@iiitr.ac.in', 
    },  
    {
      name: 'Harsh Kholwar',
      role: 'Core Team',
      photo: 'members/harshk.png',
      linkedin: 'https://www.linkedin.com/in/harsh-kholwar-b369b2332/',
      email: 'mc24b1012@iiitr.ac.in', 
    },  
    {
      name: 'Sravanthi',
      role: 'Core Team',
      photo: 'members/sravanthi.png',
      linkedin: 'https://www.linkedin.com/in/sravanthi-bevara-351996327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'cs24b1010@iiitr.ac.in', 
    },  
    {
      name: 'Tanmay Mallik',
      role: 'Core Team',
      photo: 'members/tanmay.png',
      linkedin: 'https://www.linkedin.com/in/tanmay-mallik-174a202a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'cs24b1058@iiitr.ac.in', 
    },    
  ],
  'Content and Creatives': [
    {
      name: 'Abhishek Buddiga',
      role: 'Ideation Team Lead',
      photo: 'members/abhishek.png',
      linkedin: 'https://www.linkedin.com/in/abhishek-buddiga-bb5a0b2b8/',
      email: 'ad23b1012@iiitr.ac.in',
    },
    {
      name: 'P Charukesh',
      role: 'Graphic Team Lead',
      photo: 'members/charukesh.png',
      linkedin: 'https://www.linkedin.com/in/pyla-charukesh-937aa02b7/',
      email: 'ad23b1043@iiitr.ac.in', 
    },
    {
      name: 'O Vinay Reddy',
      role: 'Graphic Team',
      photo: 'members/vinay.jpg',
      linkedin: 'https://www.linkedin.com/in/vinay-reddy-9aa439295/',
      email: 'ad23b1039@iiitr.ac.in', 
    },  
    {
      name: 'K Deepthika',
      role: 'Ideation Team',
      photo: 'members/deepthika.png',
      linkedin: 'https://www.linkedin.com/in/kakarla-deepthika-2b134b2ba',
      email: 'cs23b1030@iiitr.ac.in', 
    },  
    {
      name: 'k Lakshmi Sravika',
      role: 'Graphic Team',
      photo: 'members/sravika.png',
      linkedin: 'https://linkedin.com/in/lakshmi-sravika-k-ab19772a7',
      email: 'ad23b1024@iiitr.ac.in', 
    },  
    {
      name: 'Balisetty Tony Madhuri',
      role: 'Graphic Team',
      photo: 'members/tony.png',
      linkedin: 'https://www.linkedin.com/in/sita-rama-4b9203331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'ad24b1012@iiitr.ac.in', 
    },  
    {
      name: 'Naveen Mittal',
      role: 'Ideation Team',
      photo: 'members/naveen.png',
      linkedin: 'https://www.linkedin.com/in/naveen-mittal-267a291ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'ad24b1044@iiitr.ac.in', 
    },  
    {
      name: 'Saransh Sharma',
      role: 'Graphic Team',
      photo: 'members/saransh.png',
      linkedin: 'https://www.linkedin.com/in/saransh-sharma-3a3a3a2b5/',
      email: 'cs24b1052@iiitr.ac.in', 
    },  
  ],
  'Video Team': [
    {
      name: 'Vijay N Gowd',
      role: 'Team Lead',
      photo: 'members/vijay.jpg',
      linkedin: 'https://www.linkedin.com/in/kota-vijay-narasimha-gowd-a91a162a5/',
      email: 'cs23b1035@iiitr.ac.in',
    },
    {
      name: 'Sarthak Jain',
      role: 'Core Team',
      photo: 'members/sarthak.jpg',
      linkedin: 'https://www.linkedin.com/in/sarthak-jain-191797254/',
      email: 'cs23b1062@iiitr.ac.in', 
    },  
    {
      name: 'Smaran Reddy',
      role: 'Core Team',
      photo: 'members/smaran.png',
      linkedin: 'https://www.linkedin.com/in/smaran-reddy-57a5b62a0/',
      email: 'cs23b1011@iiitr.ac.in', 
    },  
    {
      name: 'Mayank Soni',
      role: 'Core Team',
      photo: 'members/mayank.png',
      linkedin: 'https://www.linkedin.com/in/mayank-soni-2580a9337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'cs24b1031@iiitr.ac.in', 
    },
  ],
};

export default function TeammembersPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <h1 className="text-5xl font-extrabold text-[#A6FF4D] tracking-tight drop-shadow-lg mb-8">
          Meet the Team
        </h1>
        {Object.entries(teammembers).map(([category, members]) => (
          <div key={category} className="mb-12 w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-[#A6FF4D] text-center pb-2 mb-6">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-gray-900 p-6 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:border hover:border-[#A6FF4D]"
                >
                  <img
                    src={member.photo}
                    alt={`${member.name}'s profile`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-[4px] border-[#A6FF4D]"
                  />
                  <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-center text-gray-400 mb-2">{member.role}</p>
                  <div className="flex justify-center space-x-6 mt-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#A6FF4D] transition-transform duration-200">
                      <FaLinkedin />
                    </a>
                    <a href={member.email} className="text-3xl hover:text-[#A6FF4D] transition-transform duration-200">
                      <FaEnvelope />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
