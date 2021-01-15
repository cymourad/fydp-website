/**
 * This page displays a list of blog entires, which detail the progression of our developement.
 * Maybe we will show them as an outline
 * or maybe they will be cards and the user can click on them to go to more detail.
 */

import React, { useState } from "react";

import BlogSearchFilter from "./blogs/BlogSearchFilter";
import BlogCard from "../components/BlogCard";
// import Timeline from "../components/Timeline";

import blogInfo from "../resources/data/blogs";

const Progress = () => {
	const [blogs, setBlogs] = useState(blogInfo);

	console.log(blogs);

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Our Journey</h1>
			<BlogSearchFilter allBlogs={blogInfo} setBlogs={setBlogs} />
			{blogs ? (
				blogs.map((blog) => (
					<BlogCard title={blog.title} image={blog.image} text={blog.summary} />
				))
			) : (
				<p>You might wanna adjust your filters!</p>
			)}
		</div>
	);
};

export default Progress;
