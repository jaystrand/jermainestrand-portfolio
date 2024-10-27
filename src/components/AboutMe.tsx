import React from 'react';
// Remove the absolute path import
// Instead, use a relative path if importing, or reference from public folder

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
                    <img
                        src="/images/Avatar.png"  // This is correct if the image is in public/images
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