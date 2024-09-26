import { InlineCode } from "@/once-ui/components";

const person = {
	firstName: "Shaan",
	lastName: "",
	get name() {
		return [this.firstName, this.lastName].join(" ").trim();
	},
	role: "The Magician",
	avatar: "/images/avatar.jpg",
	location: "Asia/Dhaka", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	languages: ["English", "Bengali"], // optional: Leave the array empty if you don't want to display languages
	keywords: [
		"C",
		"C++",
		"Python",
		"Django",
		"JavaScript",
		"ReactJS",
		"ElectronJS",
		"Cordova",
		"AWS",
		"Linux",
	],
	keywordsEx: ["Qemu/KVM", "Proxmox", "Postfix", "Dovecot", "Dojo", ".NET"],
	get keywordsAll() {
		return this.keywords.concat(this.keywordsEx);
	},
};

const newsletter = {
	display: false,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: (
		<>
			I occasionally write about design, technology, and share thoughts on the
			intersection of creativity and engineering.
		</>
	),
};

const social = [
	{
		name: "GitHub",
		icon: "github",
		link: "https://github.com/shanto/",
	},
	{
		name: "Discord",
		icon: "discord",
		link: "https://discord.gg/R2fzW8dd",
	},
	// {
	//     name: 'LinkedIn',
	//     icon: 'linkedin',
	//     link: 'https://www.linkedin.com/yafarhad/',
	// },
	// {
	//     name: 'X',
	//     icon: 'x',
	//     link: 'https://x.com/in/yafarhad/',
	// },
	// {
	//     name: 'Email',
	//     icon: 'email',
	//     link: 'mailto:mail@shaan.icu',
	// },
];

const home = {
	label: "Home",
	title: `${person.name}′s Site`,
	description: `${person.name}′s personal website`,
	headline: (
		<>
			DevOps engineer &amp;
			<br /> Full-Stack Developer
		</>
	),
	subline: (
		<>
			Hello! I′m {person.firstName}. Former DevOps engineer and full-stack
			software developer.
			<br />
			{person.keywords.join(", ")}
			<br />
			are only few from my full list of keywords. Explore the site for the full
			list.
			<br />
			In my free time I dig into <InlineCode>GitHub</InlineCode> and..
			<br />
			look for abandoned but useful projects to adopt.
			<br />
		</>
	),
};

const about = {
	label: "About",
	title: "About me",
	description: `Meet ${person.name}, ${person.role} from ${person.location}`,
	tableOfContent: {
		display: false,
		subItems: true,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: true,
		link: "https://cal.com/shaan.icu",
	},
	intro: {
		display: true,
		title: "Introduction",
		description: (
			<>
				{person.firstName} is a multi-talent full-stack developer and former
				devops engineer with a passion for transforming complex challenges into
				simple, elegant solutions enriched with frashest technologies.{" "}
				{person.keywordsAll.join(", ")} etc are only a few keywords among many
				others that highlight his vast experience in the industry.
			</>
		),
	},
	history: {
		title: "History",
		display: true,
		description: (
			<>
				Shaan started his career in late-2006 in parallel to studying for his
				computer science degree. After graduation in mid-2008, he continued as a
				freelance. Not being tied to any specific employer helped him evaluate
				and explore many different technologies. Embracing <b>the new</b> or{" "}
				<b>the next big thing</b> has never been a challenge for him.
			</>
		),
	},
	work: {
		display: true, // set to false to hide this section
		title: "Work Experience",
		experiences: [
			{
				company: "Royer Design, Inc.",
				timeframe: "2008 - Present",
				role: "Chief Development Engineer",
				achievements: [
					<>
						Been the go-to person for everything technical for the{" "}
						<a href="https://royerdesign.com/">Miami based agency</a>{" "}
						specialized in design industry.
					</>,
					<>
						Developed numerous startup websites and apps for the agency— from
						simple branding websites to complex social apps.
					</>,
				],
				images: [
					{
						src: "/images/projects/apps/SXSW-ChallengeStar-Group.jpg",
						alt: "Once UI Project",
						width: 16,
						height: 9,
					},
				],
			},
			{
				company: "Paradise Publishers, Inc.",
				timeframe: "2009 - 2022",
				role: "DevOps Engineer",
				achievements: [
					<>
						Separation and reintegration of web, mail and database systems from
						monolithic legacy site setup.
					</>,
					<>
						Developing and managing organization workflows— issue tracking,
						source code management, deployment automation, log analysis,
						incident response etc.
					</>,
				],
				images: [
					{
						src: "/images/projects/websites/free-ebooks.png",
						alt: "Once UI Project",
						width: 16,
						height: 9,
					},
				],
			},
		],
	},
	studies: {
		display: true, // set to false to hide this section
		title: "Studies",
		institutions: [
			{
				name: "Daffodil Intl. University, Dhaka",
				description: (
					<>
						Studied computer science with software engineering and internet
						security major.
					</>
				),
			},
		],
	},
	technical: {
		display: true, // set to false to hide this section
		title: "Technical skills",
		skills: [
			{
				title: "Dark Mode",
				description: (
					<>
						Able to transform legacy .NET XAML apps to support modern dark modes
						available in Windows 10-11.
					</>
				),
				images: [
					{
						src: "/images/projects/desktop/synctrayzor.png",
						alt: "SyncTrayzor Dark",
						width: 16,
						height: 9,
					},
				],
			},
			// {
			//     title: 'Integration Fix for Open-Source Projects',
			//     description: <>...</>,
			//     images: []
			// },
			{
				title: "Internet Enabled Desktop Apps",
				description: (
					<>
						Building internet enabled desktop apps with modern frameworks like
						Electron/WebView2.
					</>
				),
				images: [
					{
						src: "/images/projects/desktop/mtube.png",
						alt: "mTube",
						width: 16,
						height: 9,
					},
				],
			},
		],
	},
};

const blog = {
	label: "Blog",
	title: "Writing about design and tech...",
	description: `Read what ${person.name} has been up to recently`,
	// Create new blog posts by adding a new .mdx file to app/blog/posts
	// All posts will be listed on the /blog route
};

const work = {
	label: "Work",
	title: "My projects",
	description: `Design and dev projects by ${person.name}`,
	// Create new project pages by adding a new .mdx file to app/blog/posts
	// All projects will be listed on the /home and /work routes
};

const gallery = {
	label: "Gallery",
	title: "My photo gallery",
	description: `A photo collection by ${person.name}`,
	images: [
		{
			src: "/images/gallery/dinajpur.jpg",
			alt: "image",
			orientation: "vertical",
		},
	],
};

export { person, social, newsletter, home, about, blog, work, gallery };
