// --- Years of experience ---
const yearsExperience = new Date().getFullYear() - 2010;
document.getElementById('years-experience').textContent = yearsExperience;
document.querySelectorAll('.years-experience-inline').forEach(el => {
	el.textContent = yearsExperience;
});

// --- Theme cycling ---
const themes = [
	{
		name: 'ocean',
		accent: '#3b6b8a',
		accentHover: '#1e4d6b',
		bg: '#f0f2f5',
		pillBg: '#f0f4f8',
		pillBorder: '#dce4ec',
		divider: '#e5eaef',
		iconBg: '#f0f4f8',
	},
	{
		name: 'forest',
		accent: '#4a7c59',
		accentHover: '#2d5a3a',
		bg: '#f2f5f0',
		pillBg: '#f0f5ed',
		pillBorder: '#d4e4cd',
		divider: '#dde8d8',
		iconBg: '#f0f5ed',
	},
	{
		name: 'amber',
		accent: '#8a6b3b',
		accentHover: '#6b4f1e',
		bg: '#f5f3f0',
		pillBg: '#f8f4f0',
		pillBorder: '#ecdcce',
		divider: '#efe5da',
		iconBg: '#f8f4f0',
	},
	{
		name: 'dusk',
		accent: '#6b5b8a',
		accentHover: '#4d3e6b',
		bg: '#f3f0f5',
		pillBg: '#f4f0f8',
		pillBorder: '#ddd4ec',
		divider: '#e5ddef',
		iconBg: '#f4f0f8',
	},
];

let currentTheme = 0;

function applyTheme(index) {
	const theme = themes[index];
	const root = document.documentElement;
	root.style.setProperty('--accent', theme.accent);
	root.style.setProperty('--accent-hover', theme.accentHover);
	root.style.setProperty('--bg', theme.bg);
	root.style.setProperty('--pill-bg', theme.pillBg);
	root.style.setProperty('--pill-border', theme.pillBorder);
	root.style.setProperty('--divider', theme.divider);
	root.style.setProperty('--icon-bg', theme.iconBg);
}

function cycleTheme() {
	currentTheme = (currentTheme + 1) % themes.length;
	applyTheme(currentTheme);
}

document.getElementById('clickme').addEventListener('click', cycleTheme);
