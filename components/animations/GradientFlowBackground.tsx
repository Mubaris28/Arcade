"use client";

export default function GradientFlowBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        {/* Red gradient orb 1 */}
        <div 
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl animate-gradient-shift-slow"
          style={{ 
            background: 'radial-gradient(circle, #d00000 0%, transparent 70%)',
          }}
        />
        
        {/* White gradient orb */}
        <div 
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl animate-gradient-shift-medium"
          style={{ 
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
          }}
        />
        
        {/* Red gradient orb 2 */}
        <div 
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full opacity-15 blur-3xl animate-gradient-shift-fast"
          style={{ 
            background: 'radial-gradient(circle, #d00000 0%, transparent 70%)',
          }}
        />
        
        {/* White gradient orb 2 */}
        <div 
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-8 blur-3xl animate-gradient-shift-slow-reverse"
          style={{ 
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
          }}
        />
      </div>
      
      {/* Subtle noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
