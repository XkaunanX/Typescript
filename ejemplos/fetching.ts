interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  async function fetchPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    return response.json();
  }
  
  async function displayPosts(): Promise<void> {
    try {
      const posts = await fetchPosts();
      posts.forEach(post => {
        console.log(`ID: ${post.id}, Title: ${post.title}`);
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  // Ejecución
  displayPosts();
  