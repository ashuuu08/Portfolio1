import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TechNetwork() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;
    
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    let mouse = { x: null, y: null, radius: 150 };
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const techStack = [
      { text: "Java", color: "#FFDE59", size: 26 },
      { text: "React", color: "#3DD6A3", size: 28 },
      { text: "Node.js", color: "#FF6B9D", size: 26 },
      { text: "Spring", color: "#FFDE59", size: 22 },
      { text: "Express", color: "#FF6B9D", size: 20 },
      { text: "SQL", color: "#3DD6A3", size: 22 },
      { text: "Docker", color: "#FFDE59", size: 18 },
      { text: "AWS", color: "#FF6B9D", size: 18 },
      { text: "Git", color: "#3DD6A3", size: 16 }
    ];

    class Node {
      constructor(tech) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.radius = tech.size;
        this.baseRadius = tech.size;
        this.tech = tech;
        this.isTech = tech.text !== "";
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        if (this.isTech) {
          ctx.fillStyle = this.tech.color;
          ctx.fill();
          // shadow/glow
          ctx.shadowBlur = 15;
          ctx.shadowColor = this.tech.color;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
          
          ctx.font = `bold ${this.radius * 0.65}px "Space Grotesk", sans-serif`;
          ctx.fillStyle = '#111827';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(this.tech.text, this.x, this.y);
        } else {
          ctx.fillStyle = this.tech.color;
          ctx.fill();
        }
        ctx.closePath();
      }
      
      update() {
        if (this.x + this.radius > width || this.x - this.radius < 0) this.vx = -this.vx;
        if (this.y + this.radius > height || this.y - this.radius < 0) this.vy = -this.vy;

        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const dirX = dx / distance;
            const dirY = dy / distance;
            this.x -= dirX * force * 2;
            this.y -= dirY * force * 2;
          }
        }

        this.x += this.vx;
        this.y += this.vy;
      }
    }

    let nodes = [];
    techStack.forEach(t => nodes.push(new Node(t)));
    for(let i=0; i<40; i++) {
       nodes.push(new Node({ text: "", color: "rgba(255,255,255,0.15)", size: Math.random() * 3 + 1 }));
    }

    let animationFrameId;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      
      for(let i=0; i<nodes.length; i++){
         nodes[i].update();
         
         for(let j=i; j<nodes.length; j++){
            let dx = nodes[i].x - nodes[j].x;
            let dy = nodes[i].y - nodes[j].y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            
            if(distance < 130) {
               ctx.beginPath();
               let opacity = 1 - distance/130;
               // If one is tech and one is normal, use the tech color for the line
               if (nodes[i].isTech && !nodes[j].isTech) {
                 ctx.strokeStyle = `rgba(${hexToRgb(nodes[i].tech.color)}, ${opacity * 0.5})`;
               } else if (!nodes[i].isTech && nodes[j].isTech) {
                 ctx.strokeStyle = `rgba(${hexToRgb(nodes[j].tech.color)}, ${opacity * 0.5})`;
               } else {
                 ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
               }
               ctx.lineWidth = 1.5;
               ctx.moveTo(nodes[i].x, nodes[i].y);
               ctx.lineTo(nodes[j].x, nodes[j].y);
               ctx.stroke();
               ctx.closePath();
            }
         }
         
         nodes[i].draw();
      }
    }

    animate();

    const handleResize = () => {
       width = container.offsetWidth;
       height = container.offsetHeight;
       canvas.width = width * window.devicePixelRatio;
       canvas.height = height * window.devicePixelRatio;
       ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Helper to convert hex to rgb string for lines
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
      : '255, 255, 255';
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      ref={containerRef}
      className="relative w-full max-w-[520px] h-[520px] rounded-3xl overflow-hidden shadow-2xl z-10 hidden lg:block"
      style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-72 h-72 bg-[#FFDE59] rounded-full mix-blend-screen blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[-20%] w-80 h-80 bg-[#3DD6A3] rounded-full mix-blend-screen blur-[120px] opacity-20" />
      </div>
      
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />
      
      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center z-10 pointer-events-none">
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10">
          <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-[#FFDE59] animate-pulse"/>
             <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B9D] animate-pulse" style={{animationDelay: '200ms'}}/>
             <div className="w-2.5 h-2.5 rounded-full bg-[#3DD6A3] animate-pulse" style={{animationDelay: '400ms'}}/>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-gray-300 font-bold">Interactive Topology</div>
        </div>
        
        <div className="text-[9px] text-gray-500 font-mono tracking-widest bg-black/40 px-3 py-1.5 rounded-xl backdrop-blur-sm border border-white/5">
          HOVER TO INTERACT
        </div>
      </div>
    </motion.div>
  );
}
