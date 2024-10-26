import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Property Pulse',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental property',
};

const MainLayout = ({ children }) => {
    return (<html>
        <body>
            <main>
                <Navbar />
                {children}
                <Footer />
            </main>
        </body>
    </html> );
}
 
export default MainLayout;