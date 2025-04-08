'use client'

import React, { useEffect } from 'react';
import Header from '@/components/Header';

const EditReport = () => {
    let text = `Evaluation Report MiC Y2 Semester 1 [2025]
(101 respondents)

Q1 - Think about the MiC workshop " Working within and across cultures in health" at the beginning of this semester (the one where you created life events for others to find support). How has the workshop assisted you in achieving the MiC Y2 Learning Outcomes?
#
Question
Workshop was very helpful
Workshop was somewhat helpful
Workshop was unhelpful
Workshop was very unhelpful
1
Discuss the inter-connections between various social determinants of health.
78.22%
20.79%
0.99%
0.00%
2
Discuss at least five approaches used by community-based health-related services to address social determinants of health.
66.34%
32.67%
0.99%
0.00%
3
Compare how different professions approach the same health risk or outcome in community-based health-related services.
65.35%
33.66%
0.99%
0.00%
4
Illustrate how the literature has been used to inform the activities of community-based health-related services.
63.37%
35.64%
0.99%
0.00%
5
Reflect on own view of comprehensive patient-centred care.
78.57%
20.41%
1.02%
0.00%

Q2 - What was good about the workshop?
Several quotes:
    • Covered a broad spectrum of perspectives which fuel a unique understanding.
    • It was very interactive and made everyone feel very comfortable when discussing an important topic.
    • It was interactive and interesting to simulate how patients may feel entering an unfamiliar environment.
    • It was a good reminder of how people have unique experiences and backgrounds, and how one person's interpretation and understanding can vary from another, even when dealing with the same situation.
    • It was very engaging and hands on, and the practical components worked well with the theoretical lessons, and helped me in understanding and retaining information.
    • The card game was really good, good demonstration about how variations in culture can cause inequality. 
    • The activities were really interesting to help us consider cultural issues from different points of view.
    • Great discussion of what influences our biases and opinions influence our approaches to cross cultural interactions. It was really eye-opening, engaging and fun.
    • Very hands-on, made the point about living as a minority very potent, therefore easy to apply in future practice.
    • I liked the activities and how they brought the group together. It gave a good personal experience of how it feels to enter a new culture where you don't understand the customs. 
    • It put us in the shoes of someone who experienced cultural barriers in the healthcare system whether it is due to language, religion, or tradition.
    • It was fun, engaging, insightful and informative.
    • Interesting activity to explain the concept.
    • It taught me that as a health professional understanding culture is a massive thing.

Q3 - How could the workshop be improved?
Several quotes:
    • More about how to interact with people of different backgrounds. 
    • More link to patient care?
    • A little bit more focused, it was a little tangential at times.
    • I actually really enjoyed the workshop. I think maybe some more time with the activities would have been beneficial but otherwise good!
    • If they were closer together so students have the first workshop fresh in their mind and can build upon it in the second workshop.

Q5 - How has today's tutorial assisted you in achieving the MiC Y2 Learning Outcomes?
#
Question
Tutorial was very helpful
Tutorial was somewhat helpful
Tutorial was unhelpful
Tutorial was very unhelpful
1
Discuss the inter-connections between various social determinants of health.
72.28%
26.73%
0.99%
0.00%
2
Discuss at least five approaches used by community-based health-related services to address social determinants of health.
67.33%
29.70%
2.97%
0.00%
3
Compare how different professions approach the same health risk or outcome in community-based health-related services.
71.29%
26.73%
1.98%
0.00%
4
Illustrate how the literature has been used to inform the activities of community-based health-related services.
66.00%
30.00%
4.00%
0.00%
5
Reflect on own view of comprehensive patient-centred care.
80.00%
20.00%
0.00%
0.00%

Q6 - How could today's tutorial session be improved?
Several quotes:
    • The session could be more hands on and interactive.
    • More variety among styles of activities.
    • Just including more game likes materials. 
    • could have inclusion of scenarios where students can identify if there was cultural competency or not and how to improve/identify ways in which cultural competency was displayed or not displayed, include literature reading in the class maybe, go over definitions of key terms. 
    • It was already good, but maybe more practical components.
    • Add more activities that relates to real life situations.
    • Talk about the risk and consequences more and what skills to use.
    • Talk a bit more about practical ways to approach culturally diverse patients. 
    • Focus more on the ways to interact with people with different backgrounds.
    • Give more info on current ways we address cultural competency. 
    • I'm not sure - I think the tutorial quality would vary wildly based on whether or not your rapport with your PBL group is solid or not.
    • Maybe some interactive materials such as videos to give some perspectives on different roles of health care professionals. Scenarios of good and bad interactions in the workplace and then ask what we would do.
    • Maybe there should be a script for the colour game.
    • If it was closer to the first session so we did not need to take time at the start to recap the first session and could get straight into building on our learning.`

    useEffect(() => {
        document.getElementById('area').innerHTML = text.replace(/\n/g, '<br>');
    }, [])
    return (
        <>
        <Header />
        <main>
        <textarea className='w-screen h-screen whitespace-pre-line wrap-break-word'
        id='area'/>    
        </main>
        </>
    );
}
 
export default EditReport;