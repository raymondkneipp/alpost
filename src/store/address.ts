import create from "zustand";

interface Address {
	street: string;
	city: string;
	state: string;
	zip: string;
}

interface AddressState extends Address {
	setAddress: (address: Address) => void;
}

const useAddress = create<AddressState>((set) => ({
	street: "",
	city: "",
	state: "",
	zip: "",
	setAddress: (address) => set((state) => ({ ...address })),
}));

export default useAddress;
