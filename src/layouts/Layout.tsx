type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return <div className="border-8 border-red-500">{children}</div>;
};

export default Layout;
