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
    backgroundColor: 'black',
    color: 'blue',
    padding: '0.5rem 1rem',
    margin: '0 0.5rem',
    border: 'none',
    cursor: 'pointer',
  },
  navButtonActive: {
    backgroundColor: 'gray',
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
    backgroundColor: '#00008B',
    borderRadius: '1.5rem',
    boxShadow: '0 2px 4px black',
    width: '450px', 
    minHeight: '200px',
    maxHeight: '500px',
    margin: '1rem auto',
 
  },
  projectImage: {
    width: '100%',
    height: '200px',
    objectFit: '',
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
    backgroundColor: 'black',
    color: '#FAF0E6',
    borderRadius: '0.25rem',
    textDecoration: 'none',
  },
  projectInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contactSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
  },
  contactForm: {
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '0.25rem',
    border: '1px solid #ccc',
  },
  inputError: {
    border: '1px solid red',
  },
  errorMessage: {
    color: 'red',
    fontSize: '0.875rem',
    margin: '0',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  
};

export default styles;
