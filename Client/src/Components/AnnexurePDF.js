import React , { Component}from 'react';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import styles from './Annexurestyle.module.css';
class Annex extends Component{
 constructor(props){
   super(props)
 }
      printdoc(){
        const input = document.getElementById('page');
    html2canvas(input).then( function(canvas) {
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 210; 
      var pageHeight = 295;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF('p', 'mm');
      var position = 0;
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save( 'file.pdf');
      });
       }
render(){
    return(<>
    <button  onClick={this.printdoc}>Generate</button>
  <div id="page">
    <div className = {styles.annex}>
    <h4><b><u>Annexure</u></b></h4>
    <p>You shall be governed by the following terms and condition of service during working period Hand Holding Solution, and those may be amended from time to time.<br/>
<br/> <br/>
1.  You are being hired as a {this.props.position} and Mr. Pranay Ranjan & Mr. Akshay Khandelwal would be your Reporting Manager and Mentor. As a {this.props.position} you would be responsible for following tasks and responsibilities:-<br/>
• Meeting with clients to discuss website design and function.<br/>
• Designing and building the website front-end, backend and API Integration<br/>
• Creating the website architecture.<br/>
• Designing and managing the website back-end including database and Server Integration.<br/>
• Generating WordPress themes and plugins.<br/>
• Conducting website performance tests.<br/>
• Troubleshooting issues.<br/>
• Monitoring the performance of the live website. <br/>
• Understanding innovations and technology to bring illustration for the same.<br/>
• Trial and testing of our existing projects.<br/>
<br/>
2.  Your date of joining is {this.props.date}. You are expected to devote the require time and efforts to Hand Holding Solution. You are also required to let your mentor know about forthcoming events (if there are any) in advance so that your work can be planned accordingly.<br/>
<br/>
3.  You will be working remotely. There will be catch ups scheduled with your mentor to discuss work progress and overall experience at regular intervals.<br/>
<br/>
4.  All the work that you will produce at or in relation to Hand Holding Solution will be the intellectual property of Hand Holding Solution. You are not allowed to store, copy, sell, share, and distribute it to a third party under any circumstances. Similarly, you are expected to refrain from talking about your work in public domains (both online such as blogging, social networking site and offline among your friends, college etc.) without prior discussion and approval of your mentor.
    </p>
    <br/><br/><br/><br/>
    <br/>
    <p>5. We take data privacy and security very seriously and to maintain confidentiality of any students, customers, clients, and companies’ data and contact details that you may get access to will be your responsibility. Hand Holding Solution operates on zero tolerance principle with regard to any breach of data security guidelines. In case you resign or fired from Hand Holding Solution, you are expected to hand over all Hand Holding Solution work/data stored on your Personal Computer to your mentor and delete the same from your machine.
<br/><br/>
6.  Under normal circumstances either the company or you may terminate this association by providing a prior notice of 30 days with the proper reason for leaving this company. However, the company may terminate this agreement forthwith under situations of in-disciplinary behaviour.
<br/><br/>
7.  You are expected to conduct yourself with utmost professionalism in dealing with your mentor, team members, colleagues, clients and customers and treat everyone with due respect.
<br/><br/>
8.  Hand Holding Solution is a start-up and we love people who like to go beyond the normal call of the duty and can think out of the box. Surprise us with your passion, intelligence, creativity and hard work – and expect appreciation & rewards to follow.
<br/><br/>
9.  Expect constant and continuous objective feedback from your mentor and other team members and we encourage you to ask for and provide feedback at every possible opportunity. It’s your right to receive and give feedback – this is the ONLY way we all can continuously push ourselves to do better.
<br/><br/>

10.  Have fun at what you do and do the right thing – both the principles are core of what Hand Holding Solution stands for and we expect you to imbibe them in your day to day actions and continuously challenge us if we are falling short of expectations on either of them.
</p>
<br/><br/><br/><br/><br/> <br/> <br/><br/><br/><br/><br/><br/>
<p>11.  You will be provided with Following Perks:<br/>
• If you are doing the work perfectly, you'll be rewarded with a monetary prize of INR {this.props.stipend}/- per month. Also, you will be provided with the completion certificate at the end of your internship.<br/>
• Letter of Recommendation will be provided (based on the work).<br/>
• Your will be referred to our partner company for internship, if requested.<br/>
• Certificate of Completion of Internship will be provided after completion of your internship. The duration of the internship will be 2 months.<br/>
• PPO will be provided based on the performance<br/><br/>

I have negotiated, agreed, read and understood all the terms and conditions of this Offer letter as well as Annexure hereto and affix my signature in complete acceptance of the terms of the letter.<br/>
<br/><br/>  </p>
<pre>Date:{this.props.date}                                       Signature: - <br/><br/></pre>
 
Place: - {this.props.place}<br/><br/>                                                                                  
Name: - {this.props.name}<br/>
<br/><br/><br/><br/>

</div>
</div>
</>
    )}}


export default Annex;