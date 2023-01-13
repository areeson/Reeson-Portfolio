import React from 'react'

import headshot from '../../data/headshot.jpg';
import provisotables from '../../data/provisotables.png';
import { Link, } from 'react-router-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid, projectsBUCardData, projectsPersonalCardData, projectsE36CardData} from '../../data/dummy';
import { Header } from '../../components';


const Proviso = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
      <div className='flex flex-col h-screen h-94v overflow-y-auto -mt-16'>
        <div className='h-full 2xl:mt-40 2xl:mr-72 2xl:ml-72'>
          <div className='mr-28 ml-28'>
            <p className="text-xl mb-10 float-right">
              1.11.23
            </p>
            <p className="text-8xl mb-16">
              Capstone Project: 'Proviso'
            </p>
            <p className="text-2xl mb-5">
              My final project during my time at Bellevue. Put together as a group of 6, we built a reservation based site that would be used for a hypothetical hotel chain such as Hilton or Marriot. In our case, the chain is called Proviso.
            </p>
            <div className='flex flex-col items-end mb-16'>
              <p className="text-xl mb-1 flex items-center">
                <img src={headshot} className='rounded-full w-12 h-12 mr-3' /> Andrew Reeson, Developer
              </p>
              <p className="text-xl mb-1">
                Kevin Finnis, Developer
              </p>
              <p className="text-xl mb-1">
                Cabes Blah, Developer
              </p>
              <p className="text-xl mb-1">
                Ryan Songcuan, Developer
              </p>
              <p className="text-xl mb-1">
                DHadi, Developer
              </p>
              <p className="text-xl">
                Ben Bordwell, Developer
              </p>
            </div>
            <div class="aspect-w-16 aspect-h-9">
              <iframe src="https://www.youtube.com/embed/c0A9hNNsCmk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className='mt-10'>
              <p className='text-lg mb-10'>
                If you'd like to see a tour of the site along with a look at the work behind the scenes checkout the video above. This was a project that ran 9 weeks long, it started with meeting the team and included the full software development cycle. This is one of the projects I'm most excited about as of recently because of the real feel of sharing responsibilities and opinions with a team of developers. There were time's I got to be the student and there were times I got to be the teacher, which led for a team culture. 
              </p>
              <p className='text-3xl mb-6'>
                1. Setup
              </p>
              <p className='text-lg mb-10'>
                The first thing we needed to do was get adjusted as a team. For us this meant making sure we had a better level of communication, we decided on Discord as a way to instant message, voice chat, and screen share for problem solving. Next we had to get a repository set up. Here we all unanimously agreed on Github as the way to share our code and keep the professor in the loop. We also set up the Kanban as preparation to stay organized through the development process. We then all set up our own local environment. We decided on staying consistent to Bellevue's education by using Eclipse as the IDE, Java as the backend along with some JavaScript thrown in, along with MySQL as the database. 
              </p>
              <p className='text-3xl mb-6'>
                2. Technical Design Document
              </p>
              <p className='text-lg mb-5'>
                One of our first activities to make sure we were all moving in the same direction and on the same page was the Technical Design Document. This allowed us to have our chance of sharing opinions and thoughts on the future of the project, then put them on paper. It's content included:
              </p>
              <ul className='mb-10 list-disc ml-10'>
                <li>Purpose</li>
                <li>Terminology</li>
                <li>User Personas</li>
                <li>User Stories</li>
                <li>Work Estimations + ToDo List Posted to Kanban Board</li>
              </ul>
              <p className='text-3xl mb-6'>
                3. Prototype Build
              </p>
              <p className='text-lg mb-10'>
                After more discussion on what the site will look like, taking in examples from other similar websites, we split up the pages and began putting together sketches for what we thought was best. We then made sure to have some basics such as a consistent header and footer between all pages as well as a consistent design before moving on from the sketch and wireframe process. This led to us having a batch of fine tuned prototypes put together through drawio.
              </p>
              <p className='text-3xl mb-6'>
                4. Entity Relationship Diagram (ERD)
              </p>
              <p className='text-lg mb-5'>
                The last of our preparation before beginning execution on the plans that have been gathering was the ERD. This diagram is used to get a better understanding of the information that will be held in the database. Most documentation comes with the same goal, but this also explains the logical structure of the database. A few from this included logic such as:
              </p>
              <ul className='mb-10 list-disc ml-10'>
                <li>One Customer makes Many Reservations</li>
                <li>One Hotel has Many Reservations</li>
                <li>One Login has One Customer</li>
                <li>One Reservation has One Payment</li>
              </ul>
              <p className='text-3xl mb-6'>
                5. Building Database
              </p>
              <p className='text-lg mb-5'>
                Here consisted of taking the logic from the ERD and putting it into a .sql file written to create the proper tables for this project. There was also some tables with information that were to be filled in right away, such as hotel names and addresses. I will say that there were quite a few times we had to go back and add details that were missed in the creation of the database, meaning we could have had a more in-depth ERD.
              </p>
              <p className='mb-2'>
                Database Tables:
              </p>
              <div className='mb-10'>
                <img src={provisotables} className='h-56 w-56 mr-3' />
              </div>
              <p className='text-3xl mb-6'>
                6. Development
              </p>
              <p className='text-lg mb-5'>
                The frontend work was done using basic HTML and CSS along with some logic thrown in with Javascript. All design being done through a separate CSS file, although we had one main sheet as well for design that was consistent across all pages. The Javascript handled some pieces such as dynamic menu options, events that reacted to actions such as 'show password'. Flexbox was used heavily by me, although there was other strategies like Grid used on pages such 'About Us'.
              </p>
              <p className='text-lg mb-5'>
                For the backend work we decided to keep it familiar to what we had all been learning over the last 8 months and to use jsp pages and Java as the main object oriented language. We used MVC structure to keep our project organized and this led to neat code that could be modulated in some cases. 
              </p>
              <p className='text-lg mb-2'>
                Quick Look at The Backend:
              </p>
              <div class="aspect-w-16 aspect-h-9 mb-10">
                <iframe src="https://www.youtube.com/embed/Zpum9A_SfFU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
              <p className='text-3xl mb-6'>
                7. Testing
              </p>
              <p className='text-lg mb-10'>
                Our testing was not overly complicated by any means. We used 'test plans' to make sure each week's build was working properly before submission. What this looked like was filling out an organized sheet with what to do and what the expectation or result should be. Then as a tester you go through grading how that went for you in practice with any extra notes if needed. 
              </p>
              <p className='text-3xl mb-6'>
                8. Final Thoughts
              </p>
              <p className='text-lg pb-10'>
                I felt that this was a very well rounded project for our capstone and allowed us to feel many parts from the software development lifecycle. Being able to work on a team through an entire project beginning to end was also a nice learning experience. The collaboration that involved for the first few weeks to make sure everyone was on the same page and able to communicate efficiently was a bigger task than any of us thought it would be at first. Looking at it now I wish there was a more modern design that could have been implemented but the design was also semi-restricted by group opinions and software limitations based on using Eclipse, MVC, Java compared to other frameworks used widely as of more recent.
              </p>










            </div>
          </div>
        </div>
      </div>
  )
}

export default Proviso