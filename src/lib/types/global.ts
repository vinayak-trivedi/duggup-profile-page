export interface Post {
	text: string;
	image: string;
}

export interface CareerUpdate {
	type: 'career_update';
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
	type: 'Activity';
	date: string;
	posts: Post[];
}

export type TimelineData = (Activity | CareerUpdate)[];
