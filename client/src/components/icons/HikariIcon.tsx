const HikariIcon = ({ className }: { className?: string }) => {
	return (
		<div className={className}>
			<span
				style={{
					fontWeight: 'bold',
					fontSize: '1.5rem',
					background: 'linear-gradient(90deg, #0f172a, #1e293b)', // dark navy to slate
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					letterSpacing: '0.05em',
				}}
			>
				Inkdrop
			</span>
		</div>
	);
};

export default HikariIcon;
