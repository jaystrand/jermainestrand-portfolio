import React from 'react';
// Import the image if using the src/assets approach
import avatarImg from '../assets/images/Avatar.png';  // Adjust path based on your file location

const styles = {
    backgroundContainer: {
        backgroundImage: "url('your-background-image-url.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '3rem 1rem',
        boxShadow: '',
        backgroundColor: '',
    },
    contentWrapper: {
        backgroundColor: '#00008B',
        borderRadius: '0.5rem',
        boxShadow: 'black 0px 0px 10px',
        maxWidth: '42rem',
        margin: '0 auto',
        padding: '1.5rem',
    }
};

const AboutMe = () => {
    return (
        <div style={styles.backgroundContainer}>
            <div style={styles.contentWrapper}>
                <div className="flex flex-col items-center mb-6">
                    {/* Option 1: If image is in public/images */}
                    {/* <img
                        src={`${process.env.PUBLIC_URL}/images/Avatar.png`}
                        alt="Developer"
                        className="w-32 h-32 rounded-full mb-4 object-cover"
                        onError={(e) => {
                            console.error('Image failed to load:', e);
                        }}
                    /> */}

                    {/* OR Option 2: If using imported image from src/assets */}
                    
                    <img
                        src={avatarImg}
                        alt="Developer"
                        className="w-32 h-32 rounded-full mb-4 object-cover"
                    />
                   

                    <h2 className="text-2xl font-bold text-gray-800">Jermaine Strand</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;