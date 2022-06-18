import create from "zustand";

interface PostState {
	name: string;
	num: string;
	setName: (name: string) => void;
	setNum: (num: string) => void;
}

const usePost = create<PostState>((set) => ({
	name: "",
	num: "",
	setName: (name) => set((state) => ({ name })),
	setNum: (num) => set((state) => ({ num })),
}));

export default usePost;
