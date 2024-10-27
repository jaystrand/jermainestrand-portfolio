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
    // Log the process.env to debug
    console.log('Environment:', process.env.NODE_ENV);
    // You can also try using the public URL
    const imagePath = process.env.NODE_ENV === 'production' 
        ? '/images/Avatar.png'
        : '/images/Avatar.png';

    return (
        <div style={styles.backgroundContainer}>
            <div style={styles.contentWrapper}>
                <div className="flex flex-col items-center mb-6">
                    <img
                        src={imagePath}
                        alt="Developer"
                        className="w-32 h-32 rounded-full mb-4 object-cover"
                        onError={(e) => {
                            console.error('Image failed to load:', e);
                            // Optionally set a fallback image
                            e.currentTarget.src = '/images/fallback.png';
                        }}
                    />
                    <h2 className="text-2xl font-bold text-gray-800">Jermaine Strand</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;