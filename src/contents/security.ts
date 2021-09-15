import type { ProgramFeature } from '../types/program-feature.type';

export const secureParagraphs = [
	"Storing copies of your source code locally on countless unsecured devicesand networks is bad practice. At the same time, it has become a reality for many organisations to enable their employees to work remotely with BYOD policies.",
	"With Gitpod, your source code is safely stored in the cloud and never stored locally. Either on the carbon neutral Google Cloud Platform with our SaaS solution or on your own cloud infrastructure with Gitpod Self-Hosted. Our native integrations with GitHub, GitLab and Bitbucket create a single access point to your intellectual property, no matter where your developers are and what device they use for it.",
	"No packages or dependencies are downloaded to users' devices. Gitpod developer environments run in the cloud and are short-lived, protecting your local machines and other corporate resources from malicious attacks through execution of arbitrary code.",
]

export const programFeatures: ProgramFeature[] = [
	{
		title: 'Compliance',
		paragraphs: ['Gitpod is a European company committed to developer and data privacy. We are GDPR compliant and provide our users with the ability to access and control the information that we collect about them.', 'Gitpod is built with security in mind and we continuously invest in security best practices. We are currently in the process of becoming SOC 2 compliant and you can request a copy of our SOC2 audit report as soon as it\'s available.'],
		image: 'compliance.svg',
	},
	{
		title: 'Environment Isolation',
		paragraphs: ['Each Gitpod workspace or prebuilda> runs on a secured single-use container providing fast startup times without compromising on security', 'We create separate user, PID, mount and network namespaces for each Gitpod workspace, and establish an unprivileged node user as root within that user namespace. More details on the technical approach can be found in a talk by our Head of Engineering as well as in a blog post from the container security experts at Kinvolk who stress-tested our namespace layering implementation.'],
		image: 'environment-isolation.svg',
	},
	{
		title: 'Open source',
		paragraphs: ['Built in the open, our source code and how Gitpod is developed are publicly available for review by everyone. Our security posture, disclosure policy and speed in vulnerability handling is highlighted in the following blog post from the security research team at GitLab. Due to our native GitLab integration, they continuously monitor our system for bugs.',
			'In addition to this, we acknowledge the importance of giving back to the community and have taken steps to support the software supply chain of Gitpod and of our customers through the creation of a monetary fund for supporting open-source maintainers.'],
		image: 'open-source.svg',
	},
	{
		title: 'Authentication and Authorization',
		paragraphs: ['Gitpod uses your Git provider\'s SSO and, by default, all workspaces connections are private and authenticated, making them accessible only by the creator.', 'Prebuild logs are readable by all members of the corresponding team and no one else.'],
		image: 'auth.svg',
	},
	{
		title: 'Encryption',
		paragraphs: ['All data, including workspace backups and environment variables, is encrypted at rest using AES256; and all connections to the Gitpod app, website, workspaces and workspaces\' endpoints are encrypted in transit (TLS).'],
		image: 'encryption.svg',
	},
]