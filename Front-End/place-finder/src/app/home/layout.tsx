import Header from "@/common/components/Header/Header";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
}
