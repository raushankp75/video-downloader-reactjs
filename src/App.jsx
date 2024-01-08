import './App.css'
import Layout from './layout/Layout'
import Downloader from './pages/Downloader'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <Layout>
      <Downloader />
      <ToastContainer position='top-center' />
    </Layout>
  )
}

export default App
