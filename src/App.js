// import React, { Component } from 'react';
// import './App.css';
// import { Routes, Route, Link } from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/blog">Blog</Link></li>
//         </ul>

//         <div className="main-route-place">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/blog" element={<Blog />} />
//           </Routes>
//         </div>
//       </div>
//     );
//   }
// }

// class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Home</h2>
//       </div>
//     );
//   }
// }

// class About extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>About</h2>
//       </div>
//     );
//   }
// }

// class Blog extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Blog</h2>
//       </div>
//     );
//   }
// }

// export default App;

//exercice1:
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// const Home = () => <h1>Accueil</h1>;
// const About = () => <h1>À propos</h1>;
// const Contact = () => <h1>Contact</h1>;

// const ContactDetail = ({ id }) => <h2>Détails du contact pour ID: {id}</h2>;

// const ContactPage = () => {
//   return (
//     <div>
//       <h1>Contact</h1>
//       <ul>
//         <li>
//           <Link to="1">Contact 1</Link>
//         </li>
//         <li>
//           <Link to="2">Contact 2</Link>
//         </li>
//       </ul>

//       <Routes>
//         <Route path=":id" element={<ContactDetail />} />
//       </Routes>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link> | <Link to="/contact">Contact</Link>
//       </nav>
//       <Routes>
//         <Route path="/" component={<Home />} />
//         <Route path="/about" component={<About />} />
//         <Route path="/contact/*" component={<ContactPage />} />
//       </Routes>
//     </Router>
//   );
// };

//export default App;


//exercice 2:
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
// import "./App.css";
// const Laravel = () => {
//   return (
//     <div>
//       <h1>Laravel</h1>
//       <ul>
//         <li>
//           <Link to="installation">Installation</Link>
//         </li>
//         <li>
//           <Link to="routing">Routing</Link>
//         </li>
//       </ul>
//       <Routes>
//         <Route path=":topic" component={<SubPage />} />
//       </Routes>
//     </div>
//   );
// };

// const ReactPage = () => {
//   return (
//     <div>
//       <h1>React</h1>
//       <ul>
//         <li>
//           <Link to="hooks">Hooks</Link>
//         </li>
//         <li>
//           <Link to="state-management">State Management</Link>
//         </li>
//       </ul>
//       <Routes>
//         <Route path=":topic" component={<SubPage />} />
//       </Routes>
//     </div>
//   );
// };

// const UML = () => {
//   return (
//     <div>
//       <h1>UML</h1>
//       <ul>
//         <li>
//           <Link to="diagrams">Diagrams</Link>
//         </li>
//         <li>
//           <Link to="tools">Tools</Link>
//         </li>
//       </ul>
//       <Routes>
//         <Route path=":topic" component={<SubPage />} />
//       </Routes>
//     </div>
//   );
// };

// const SubPage = () => {
//   const { topic } = useParams();
//   return <h2>Contenu de la sous-page : {topic}</h2>;
// };

// const Home = () => <h1>Accueil</h1>;

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Accueil</Link> | <Link to="/laravel">Laravel</Link> | <Link to="/react">React</Link> | <Link to="/uml">UML</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/laravel/*" element={<Laravel />} />
//         <Route path="/react/*" element={<ReactPage />} />
//         <Route path="/uml/*" element={<UML />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

//exercice 3:
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
// import "./App.css";
// const Home = () => <h1>Accueil - Tout le monde peut accéder à cette page</h1>;
// const Dashboard = () => <h1>Dashboard - Accessible uniquement pour les utilisateurs connectés</h1>;

// const Login = ({ onLogin }) => {
//   return (
//     <div>
//       <h1>Page de Connexion</h1>
//       <button onClick={onLogin}>Se connecter</button>
//     </div>
//   );
// };

// const ProtectedRoute = ({ isAuthenticated, children }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <nav>
//         <Link to="/">Accueil</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
//         {isAuthenticated && <button onClick={handleLogout}>Se déconnecter</button>}
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// lab :
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// Données des contacts avec numéro de téléphone ajouté
const contacts = [
  { id: 1, name: "Ahmed El Khattabi", email: "ahmed.khattabi@gmail.com", phone: "0612345678" },
  { id: 2, name: "Fatima Benhaddi", email: "fatima.benhaddi@gmail.com", phone: "0698765432" },
  { id: 3, name: "Mohamed Amrani", email: "mohamed.amrani@yahoo.com", phone: "0611223344" },
  { id: 4, name: "Khadija El Idrissi", email: "khadija.idrissi@outlook.com", phone: "0622334455" },
  { id: 5, name: "Youssef Bensouda", email: "youssef.bensouda@gmail.com", phone: "0655443322" },
];

// Page d'accueil avec petite div ayant fond dégradé et bordures arrondies
const Home = () => (
  <div className="bg-white min-h-screen flex justify-center items-center p-6">
    {/* Petite div avec fond dégradé de vert à bleu et bordures arrondies */}
    <div className="bg-gradient-to-r from-green-400 to-teal-500 p-8 rounded-lg shadow-xl text-center w-full max-w-sm">
      <img
        src="logo2.png"
        alt="Logo Contact"
        className="mb-6 w-32 h-32 rounded-full mx-auto"
      />
      <h1 className="text-3xl font-semibold mb-4 text-white">Bienvenue sur l'application de gestion des contacts</h1>
      <Link to="/contacts">
        <button className="mt-6 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-xl hover:bg-teal-700 transition duration-300">
          Voir les Contacts
        </button>
      </Link>
    </div>
  </div>
);

// Liste des contacts avec barre de recherche
const ContactList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrer les contacts en fonction de la recherche
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-teal-600 mb-4">Liste des Contacts</h1>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un contact..."
        className="px-4 py-2 mb-4 w-full border border-gray-300 rounded-lg shadow-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Liste des contacts filtrés */}
      <ul className="space-y-4">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li
              key={contact.id}
              className="p-4 bg-white rounded-lg shadow-lg hover:bg-teal-50 transition duration-300 cursor-pointer"
            >
              <Link
                to={`/contacts/${contact.id}`}
                className="text-teal-600 font-semibold"
                style={{ textDecoration: "none" }} // Suppression de la ligne sous le texte
              >
                {contact.name}
              </Link>
            </li>
          ))
        ) : (
          <p className="text-red-500">Aucun contact trouvé</p>
        )}
      </ul>
    </div>
  );
};

// Détails du contact
const ContactDetail = () => {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(id));

  if (!contact) {
    return <h2 className="text-red-500">Contact introuvable</h2>;
  }

  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-500 shadow-xl rounded-lg p-6 mt-6">
      <h1 className="text-2xl font-bold text-white">Détails du contact</h1>
      <p className="mt-4 text-white"><strong>Nom :</strong> {contact.name}</p>
      <p className="mt-2 text-white"><strong>Email :</strong> {contact.email}</p>
      <p className="mt-2 text-white"><strong>Téléphone :</strong> {contact.phone}</p> {/* Affichage du numéro de téléphone */}
      <Link to="/contacts">
        <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg shadow-xl hover:bg-teal-700 transition duration-300">
          Retour à la liste des contacts
        </button>
      </Link>
    </div>
  );
};

// Application principale
const App = () => (
  <Router>
    <div className="container mx-auto p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/contacts/:id" element={<ContactDetail />} />
      </Routes>
    </div>
  </Router>
);

export default App;
