import Header from '@/components/Header';
import '@/app/reports/reports.css'
import Link from 'next/link';

const Reports = () => {
    return (
    <>
    <Header />
    <main>
        <div className="content">
            <div className="cards">
                <div className="card"><Link href='/reports/semester'>Year 1 2024 1H Report</Link></div>
                <div className="card"><Link href='/reports/semester'>Year 2 2024 1H Report</Link></div>
                <div className="card"><Link href='/reports/semester'>Year 3 2024 1H Report</Link></div>
                <div className="card"><Link href='/reports/semester'>Year 1 2024 2H Report</Link></div>
                <div className="card"><Link href='/reports/semester'>Year 2 2024 2H Report</Link></div>
                <div className="card"><Link href='/reports/semester'>Year 3 2024 2H Report</Link></div>
                <div className="card"><Link href='/reports/semester'>Year 1 2025 1H Report</Link></div>
                <div className="card"><Link href='/reports/semester'>Year 2 2025 1H Report</Link></div>
                <div className="card"><Link href='/reports/semester'>Year 3 2025 1H Report</Link></div>
            </div>
        </div>
    </main>
    </>);
}
 
export default Reports;