import React, { useState } from 'react';
import Modal from './modal';
import HoverDescription from './customCursor';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconExternalLink } from '@tabler/icons-react';

interface project {
  image?: string;
  projectName?: string;
  projectLink?: string;
  projectType?: string;
  projectTech?: string;
  projectStatus?: boolean;
  projectDesc?: string;
  githubLink?: string;
  hoverText?: string;
  hoverColor?: string;
}

const projects = [
  {
    image: 'https://i.ibb.co/MXJhNsM/Whats-App-Image-2025-06-01-at-7-04-31-PM.jpg',
    projectName: 'Fyesta',
    projectLink: 'https://fyesta.in',
    projectType: 'Web Application',
    projectTech: 'NextJs, TalwindCSS, CSSKeyFrames ',
    projectStatus: true,
    projectDesc: '',
    hoverText: 'Event Planners Platform',
    hoverColor: '#FF991C',
    githubLink: 'https://github.com/confusedhumor/Fyestafinal',
  },
  {
    image: 'https://i.ibb.co/JM9VkTQ/Whats-App-Image-2025-06-01-at-7-27-51-PM.jpg',
    projectName: 'V-CHAT',
    projectLink: 'https://v-chat-with-gemini-api-frontend.vercel.app',
    projectType: 'Web Application',
    projectTech: 'ReactJs, Google gemini API',
    projectStatus: true,
    projectDesc: 'V-Chat is a functional clone of Google Gemini, developed using the Google Generative AI API. It replicates the core conversational AI experience offered by Google\'s Gemini chatbot, allowing users to interact with a powerful, context-aware language model through a clean and responsive UI.',
    hoverText: 'Chatbot',
    hoverColor: '#305CDE',
    githubLink: 'https://github.com/confusedhumor/V-Chat-with-Gemini-API-Frontend',
  },
  {
    image: 'https://i.ibb.co/Tqw902sq/Whats-App-Image-2025-06-01-at-8-04-55-PM.jpg',
    projectName: 'KṛṣṇaBlooms',
    projectLink: 'https://krsnablooms.in',
    projectType: 'Web Application',
    projectTech: 'ReactJs,TalwindCSS,AppScript',
    projectStatus: true,
    projectDesc:'KṛṣṇaBlooms is a faith-inspired floral delivery startup based in Gurgaon, committed to delivering fresh, fragrant flowers for daily pooja rituals, temple offerings, and devotional use.With a focus on tradition, purity.',
    hoverText: 'Flowers&plants-shop Web Application',
    hoverColor: '#0BDA51',
    githubLink: 'https://github.com/confusedhumor/krsnabloomsfinal',
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<project>({});
  const toggleModal = () => setShowModal(!showModal);

  const ModalContent: React.FC = () => {
    return (
      <div
        className='p-3 sm:p-6'
        style={{ fontFamily: 'Helvetica', maxWidth: '80vw', overflowY: 'auto', backgroundColor:'#0A0A0A'}}
      >
        <img
          src={currentProject.image}
          className="object-contain w-full"
          style={{ maxHeight: '50vh' }}
        />
        <div className="flex justify-between mt-4 sm:mx-6 items-start">
          <a href={currentProject.projectLink} target='_blank'>
            <div className="sm:text-4xl text-3xl font-semibold flex flex-row items-center gap-1">
              {currentProject.projectName}
              <IconExternalLink className="size-9" />
            </div>
            <div className="text:text-xl text-base font-thin flex flex-row items-center gap-1">
              {currentProject.projectType}
            </div>
            <div className="font-thin text-sm m-0">Technology Used : {currentProject.projectTech} </div>
          </a>

          <div className="flex flex-col items-end gap-1">
            <div className="flex gap-2">
              <div>Status: </div>
              {currentProject.projectStatus === true ? (
                <p className="text-green-500">live</p>
              ) : (
                <p className="text-red-500">undeployed</p>
              )}
            </div>
            <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer">
              <div className="dark:bg-gray-900 p-2 rounded-full">
                <IconBrandGithub />
              </div>
            </a>
          </div>
        </div>

        <div className="sm:mx-6 text-justify">
          <br />
          {currentProject.projectDesc}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-9" style={{ fontFamily: 'Helvetica' }}>
      <h1 className="text-3xl sm:text-6xl mx-5 sm:mx-20 mb-1">Projects</h1>

      <div>
        <div className="flex flex-col">
          {projects.map((item) => (
            <>
              <HoverDescription description={item.hoverText} backgroundColor={item.hoverColor}>
                <div
                  onClick={() => {
                    toggleModal();
                    setCurrentProject(item);
                  }}
                  className="flex flex-col sm:flex-row justify-between sm:h-32 sm:items-center cursor-pointer transition-transform duration-300 ease-in-out sm:hover:scale-90 sm:mx-20 mx-10"
                >
                  <div className="text-3xl sm:text-3xl font-normal">{item.projectName}</div>
                  <div className="sm:hidden">
                    <img src={item.image} alt="placeholder" height={400} width={600} />
                  </div>
                  <div className="text-sm text-end flex flex-col">
                    <div className="text-xl sm:text-2xl font-thin">{item.projectType}</div>
                    <div className="font-extralight">{item.projectTech}</div>
                  </div>
                </div>
              </HoverDescription>
              <hr className="sm:mx-20 mx-10 sm:my-0 my-6 opacity-65" />
              <Modal showModal={showModal} onClose={toggleModal}>
                <ModalContent />
              </Modal>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;