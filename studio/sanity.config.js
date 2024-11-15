import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'My Blog',
  
  projectId: '', // We'll add this after setting up Sanity
  dataset: 'production',
  
  plugins: [deskTool()],
  
  schema: {
    types: []  // We'll add schemas later
  }
})