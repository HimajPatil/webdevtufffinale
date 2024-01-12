import UserProfileCard from './UserProfileCard/UserProfileCard'
import UserProfileCard1 from './UserProfileCard/UserProfileCard1';
import UserProfileCard2 from './UserProfileCard/UserProfileCard2';
import Fotter from "../fotter/fotter"
import './CanvasDesign.css';
export default function Teams() {
    return (
        <div className='mt-40 flex flex-col justify-center items-center'>
            <p className='text-white orbitron text-4xl text-center'>Meet our secretaries</p>
            <div className='flex flex-row justify-center items-center flex-wrap'>
                <UserProfileCard />
                <UserProfileCard1 />
                <UserProfileCard2 />
            </div>
            <p className='text-white orbitron text-4xl mt-10'>Officers and Admins</p>
                <div className="canvas-container md:w-96 md:pt-96 w-80 pt-80 mt-10">
                    <iframe
                        loading="lazy"
                        title="Technovanza Canva Design"
                        className="canvas-iframe"
                        src="https://www.canva.com/design/DAFtVIk6JeY/view?embed"
                        allowFullScreen={false}
                        allow="fullscreen"
                    ></iframe>
                </div>
                <a
                href="https://www.canva.com/design/DAFtVIk6JeY/view?utm_content=DAFtVIk6JeY&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                target="__blank"
                rel="noopener"
                className="canvas-link text-white"
            >
                TECHNOVANZA CORE COMMITTEE
            </a>
            <Fotter position="static"  />
        </div>

    )
}