import Input from "./Input.jsx";

const NewProject = () => {
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-500 hover:text-stone-950">Cancel</button></li>
                <li><button className="bg-stone-800 text-stone-50 px-6 py-2 rounded-md hover:bg-stone-950">Save</button></li>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" textarea />
                <Input label="Due Date" />
            </div>
        </div>
    );
}

export default NewProject;