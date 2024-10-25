const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    padding: '1rem',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
  },
  socialLink: {
    color: '#fff',
    fontSize: '1.5rem',
    margin: '0 0.5rem',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  navButton: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '0.5rem 1rem',
    margin: '0 0.5rem',
    border: 'none',
    cursor: 'pointer',
  },
  navButtonActive: {
    backgroundColor: '#555',
  },
  portfolioGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
  },
  projectCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  projectImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '0.5rem',
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '1rem 0',
  },
  projectLinks: {
    display: 'flex',
    justifyContent: 'center',
  },
  projectLink: {
    padding: '0.5rem 1rem',
    margin: '0 0.5rem',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '0.25rem',
    textDecoration: 'none',
  },
  projectInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  
};

export default styles;
