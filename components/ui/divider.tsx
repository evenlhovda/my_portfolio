interface DividerProps {
  children?: React.ReactNode;
  className?: string;
}

export function Divider({ children, className = "" }: DividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-accent/20" />
      {children && (
        <h2 className="text-2xl font-bold tracking-tighter text-slate-100 whitespace-nowrap">
          {children}
        </h2>
      )}
      <div className="h-px flex-1 bg-accent/20" />
    </div>
  )
}