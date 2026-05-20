interface DividerProps {
  children?: React.ReactNode;
  className?: string;
}

export function Divider({ children, className = "" }: DividerProps) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <div className="h-px flex-1 bg-line-2" />
      {children && (
        <h2 className="m-0 whitespace-nowrap font-display text-[28px] font-bold tracking-tight text-fg-1">
          {children}
        </h2>
      )}
      <div className="h-px flex-1 bg-line-2" />
    </div>
  )
}
