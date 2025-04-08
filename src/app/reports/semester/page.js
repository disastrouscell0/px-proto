import '@/app/reports/semester/semester.css'
import Header from '@/components/Header';
import Link from 'next/link';

const SemesterReport = () => {
    return (
        <>
        <Header />
          <h1 className='font-bold text-3xl'>MIC Y2 EVALUATION REPORT - SEMESETER 2</h1>
  <p><strong>Respondents:</strong> 80 (Response Rate: 61%)</p>

  <h2 className='font-semibold'>Q1 - MiC Workshop & Learning Outcomes</h2>
  <table>
    <tr>
      <th>Question</th>
      <th>Very Helpful</th>
      <th>Somewhat Helpful</th>
      <th>Unhelpful</th>
      <th>Very Unhelpful</th>
    </tr>
    <tr><td>Discuss social determinants inter-connections</td><td>62.03%</td><td>35.44%</td><td>2.53%</td><td>0%</td></tr>
    <tr><td>Five approaches by services</td><td>51.28%</td><td>42.31%</td><td>6.41%</td><td>0%</td></tr>
    <tr><td>Compare professions’ approaches</td><td>49.37%</td><td>49.37%</td><td>1.27%</td><td>0%</td></tr>
    <tr><td>Use of literature in services</td><td>53.16%</td><td>40.51%</td><td>6.33%</td><td>0%</td></tr>
    <tr><td>Patient-centred care reflection</td><td>68.35%</td><td>30.38%</td><td>1.27%</td><td>0%</td></tr>
  </table>

  <h2 className='font-semibold'>Q2 - What was good about the "Social Capital" workshop?</h2>
  <p><strong>Common answers:</strong> Informative, interactive, fun, creative, engaging, eye-opening.</p>
  <p><strong>Unique quotes:</strong></p>
  <ul>
    <li>The interactive nature of the workshop made it more engaging...</li>
    <li>Highlighted a new perspective in holistic patient care...</li>
    <li>Clarified linking, bridging, bonding capital...</li>
    <li>...and many more insightful reflections from students.</li>
  </ul>

  <h2 className='font-semibold'>Q3 - Improvements for "Social Capital" workshop</h2>
  <p><strong>Common answer:</strong> No need for improvement.</p>
  <p><strong>Unique suggestions:</strong></p>
  <ul>
    <li>Smaller groups and more facilitators.</li>
    <li>Include videos and more real-life examples.</li>
    <li>Clearer definitions and more readings beforehand.</li>
  </ul>

  <h2 className='font-semibold'>Q4 - Community Placement & Learning Outcomes</h2>
  <table>
    <tr>
      <th>Question</th>
      <th>Very Helpful</th>
      <th>Somewhat Helpful</th>
      <th>Unhelpful</th>
      <th>Very Unhelpful</th>
    </tr>
    <tr><td>Discuss social determinants inter-connections</td><td>66.67%</td><td>33.33%</td><td>0%</td><td>0%</td></tr>
    <tr><td>Five approaches by services</td><td>57.69%</td><td>41.03%</td><td>1.28%</td><td>0%</td></tr>
    <tr><td>Compare professions’ approaches</td><td>59.74%</td><td>38.96%</td><td>1.30%</td><td>0%</td></tr>
    <tr><td>Use of literature in services</td><td>49.35%</td><td>45.45%</td><td>3.90%</td><td>1.30%</td></tr>
    <tr><td>Patient-centred care reflection</td><td>65.79%</td><td>31.58%</td><td>2.63%</td><td>0%</td></tr>
  </table>

  <h2 className='font-semibold'>Q5 - What was good about your community placement?</h2>
  <p><strong>Common answers:</strong> Informative, eye-opening, good facilitators.</p>
  <ul>
    <li>Invaluable insights from cancer patients.</li>
    <li>Hands-on experience with clients.</li>
    <li>Learned new services and community interactions.</li>
  </ul>

  <h2 className='font-semibold'>Q6 - How could your community placement be improved?</h2>
  <p><strong>Common answers:</strong> No changes needed.</p>
  <ul>
    <li>More hands-on interaction with clients.</li>
    <li>Less lecture-style; more interactivity.</li>
    <li>Reduce hours, include tasks/roles or structure.</li>
  </ul>

  <h2 className='font-semibold'>Q7 - Tutorial & Learning Outcomes</h2>
  <table>
    <tr>
      <th>Question</th>
      <th>Very Helpful</th>
      <th>Somewhat Helpful</th>
      <th>Unhelpful</th>
      <th>Very Unhelpful</th>
    </tr>
    <tr><td>Discuss social determinants inter-connections</td><td>66.67%</td><td>33.33%</td><td>0%</td><td>0%</td></tr>
    <tr><td>Five approaches by services</td><td>60.26%</td><td>39.74%</td><td>0%</td><td>0%</td></tr>
    <tr><td>Compare professions’ approaches</td><td>61.54%</td><td>37.18%</td><td>1.28%</td><td>0%</td></tr>
    <tr><td>Use of literature in services</td><td>54.55%</td><td>42.86%</td><td>2.60%</td><td>0%</td></tr>
    <tr><td>Patient-centred care reflection</td><td>70.13%</td><td>28.57%</td><td>1.30%</td><td>0%</td></tr>
  </table>

  <h2 className='font-semibold'>Q8 - Tutorial Improvements</h2>
  <p><strong>Common answers:</strong> No improvements, shorter session, more games.</p>
  <ul>
    <li>Clarify drawing activity objective.</li>
    <li>Discuss privilege, social capital, and health outcomes more deeply.</li>
    <li>Align better with learning outcomes.</li>
  </ul>
    <br/>
    
    <div className='flex flex-row min-h-scren justify-center items-center'>
    <button className='mx-3 px-6 py-1 
            enabled:text-blue-700 enabled:bg-slate-300 
            enabled:hover:cursor-pointer rounded-full'>Export as PDF</button>
    <br/>
    <Link href='/reports/semester/edit' className='mx-7 px-7 py-2 text-blue-700 bg-slate-300 text-l rounded-full'>Edit</Link>
    </div>
    </>
    );
}
 
export default SemesterReport;