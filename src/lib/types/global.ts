export interface Post {
	text: string;
	image: string;
}

export interface CareerUpdate {
	type: 'career_update'; // Specify the exact string literal type
	date: null;
	details: {
		companyLogo: string;
		companyName: string;
		companyLocation: string;
		joinedDate: string;
		position: string;
		employmentType: string;
	};
}

export interface Activity {
	type: 'Activity'; // Specify the exact string literal type
	date: string;
	posts: Post[];
}

export type TimelineData = (Activity | CareerUpdate)[];
