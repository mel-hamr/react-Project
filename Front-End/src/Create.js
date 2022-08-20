import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setbody] = useState("");
	const [author, setAuthor] = useState("Mario");
	const [isAdding, setAdding] = useState(false);
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		setAdding(true);
		let data = { title: title, body: body, author: author };
		axios({
			url: "/Blogs/create",
			method: "POST",
			data: data,
		})
			.then((res) => {
				console.log("adding done succesfully");
                history.push("/blogs/" + res.data._id)
			})
			.catch((err) => {})
			.finally(() => {
				setAdding(false);
			});
	};

	return (
		<div className="create">
			<h2>Add a new blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title :</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<label>Blog Body :</label>
				<textarea
					value={body}
					onChange={(e) => setbody(e.target.value)}
					required
				></textarea>
				<label>Blog Author :</label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="Mario">Mario</option>
					<option value="Yoshi">Yoshi</option>
				</select>
				{!isAdding && <button>Add Blog</button>}
				{isAdding && <button>Adding Blog...</button>}
			</form>
		</div>
	);
};

export default Create;
