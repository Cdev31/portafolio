import { Layout } from "./Layout"




export const PortafolioApp = ()=> {
  
  return (
   <Layout>
      <main className="flex flex-col gap-1">
          <section className=" flex gap-5">
            {/* seccion de perfil e historia rapida */}
            <section className="bg-white rounded-full h-72 w-72 m-1"></section>
            <section className="flex flex-col gap-1 justify-center" >
              <h2 className="text-white font-bold text-5xl">Kalet Adonay Chavez Alas.</h2>
              <p className="text-gray-200 font-semibold text-justify max-w-[30rem] mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, perferendis ipsa neque esse optio quis labore, 
                doloribus veritatis repellendus nam molestias. Nesciunt officia earum laudantium ipsa unde, cumque perferendis quas.
              </p>
            </section>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-white text-center text-5xl font-bold mb-5">Skills</h2>
            <section className="flex justify-center gap-10">
                <div className="flex bg-yellow-500 rounded-md">
                    <span className="font-bold p-1 text-2xl text-black/80">Node js</span>
                </div>
                <div className="flex bg-blue-500 rounded-md">
                    <span className="font-bold p-1 text-2xl text-black/80">C++</span>
                </div>
                <div className="flex bg-green-600 rounded-md">
                    <span className="font-bold p-1 text-2xl text-black/80">Python</span>
                </div>
                <div className="flex bg-orange-500 rounded-md">
                    <span className="font-bold p-1 text-2xl text-black/80">AWS</span>
                </div>
                <div className="flex bg-orange-500 rounded-md">
                    <span className="font-bold p-1 text-2xl text-black/80">Linux</span>
                </div>
                <div className="flex bg-cyan-500 rounded-md">
                    <span className="font-bold p-1 text-2xl text-black/80">Sql Database</span>
                </div>
                <div className="flex bg-red-500 rounded-md">
                    <span className="font-bold p-1 text-xl text-black/80">NoSql Database</span>
                </div>
                <div className="flex bg-purple-500 rounded-md">
                    <span className="font-bold p-1 text-xl text-black/80">UX/UI</span>
                </div>
            </section>
          </section>
          <section>
              <h2 className="text-white text-center text-5xl font-bold mb-5">Experience</h2>
              <section className="flex gap-1 flex-wrap justify-center">
                  <div className="bg-white m-1 p-1 rounded-md flex flex-col gap-1">
                      <h2 className="font-medium text-xl">Work in DHCP</h2>
                      <span className="font-medium" >2023</span>
                      <p className="flex max-w-64">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nemo ipsa natus quaerat 
                        asperiores ullam corporis vel aperiam porro quasi! Quia repellat molestiae dicta exercitationem quis magni sequi accusantium minima.
                      </p>
                  </div>
                  <div className="bg-white m-1 p-1 rounded-md flex flex-col gap-1">
                      <h2 className="font-medium text-xl">Work in Davids Movers Services</h2>
                      <span className="font-medium">2022 - 2023</span>
                      <p className="flex max-w-64">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nemo ipsa natus quaerat 
                        asperiores ullam corporis vel aperiam porro quasi! Quia repellat molestiae dicta exercitationem quis magni sequi accusantium minima.
                      </p>
                  </div>
                  <div className="bg-white m-1 p-1 rounded-md flex flex-col gap-1">
                      <h2 className="font-medium text-xl">Work in Tonys Flooring Services</h2>
                      <span className="font-medium">2024</span>
                      <p className="flex max-w-64">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nemo ipsa natus quaerat 
                        asperiores ullam corporis vel aperiam porro quasi! Quia repellat molestiae dicta exercitationem quis magni sequi accusantium minima.
                      </p>
                  </div>
              </section>
          </section>
          <section className="flex flex-col gap-2 m-1">
             <h2 className="text-white text-center text-5xl font-bold mb-5">Projects</h2>
              <section className="flex gap-2 justify-center">
                <figure className="">
                  <img className="w-96" src="https://imgs.search.brave.com/uVCXXfwR6sII7k61yLpOgj39kCpn1zwXAPB924xEOg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/OTg1NDIyMS9lcy9m/b3RvL2NvbmNlcHRv/LWRlLWRlc2Fycm9s/bG8teS1jb2RpZmlj/YWNpJUMzJUIzbi1k/ZWwtZGlzZSVDMyVC/MW8td2ViLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1iMk5r/cXhXMUQ5OE9OdWpX/OWpWLS1WYnJJd3pn/TDY2V3dFdTJ2d3k2/VkJrPQ"/>
                  <p className="bg-white font-bold text-center">juego de c++</p>
                </figure>
                <figure className="">
                  <img className="w-96" src="https://imgs.search.brave.com/uVCXXfwR6sII7k61yLpOgj39kCpn1zwXAPB924xEOg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/OTg1NDIyMS9lcy9m/b3RvL2NvbmNlcHRv/LWRlLWRlc2Fycm9s/bG8teS1jb2RpZmlj/YWNpJUMzJUIzbi1k/ZWwtZGlzZSVDMyVC/MW8td2ViLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1iMk5r/cXhXMUQ5OE9OdWpX/OWpWLS1WYnJJd3pn/TDY2V3dFdTJ2d3k2/VkJrPQ"/>
                  <p className="bg-white font-bold text-center">juego de c++</p>
                </figure>
                <figure className="">
                  <img className="w-96" src="https://imgs.search.brave.com/uVCXXfwR6sII7k61yLpOgj39kCpn1zwXAPB924xEOg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/OTg1NDIyMS9lcy9m/b3RvL2NvbmNlcHRv/LWRlLWRlc2Fycm9s/bG8teS1jb2RpZmlj/YWNpJUMzJUIzbi1k/ZWwtZGlzZSVDMyVC/MW8td2ViLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1iMk5r/cXhXMUQ5OE9OdWpX/OWpWLS1WYnJJd3pn/TDY2V3dFdTJ2d3k2/VkJrPQ"/>
                  <p className="bg-white font-bold text-center">juego de c++</p>
                </figure>
              </section>
              <section className="flex gap-2 justify-center">
                <figure className="">
                  <img className="w-96" src="https://imgs.search.brave.com/uVCXXfwR6sII7k61yLpOgj39kCpn1zwXAPB924xEOg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/OTg1NDIyMS9lcy9m/b3RvL2NvbmNlcHRv/LWRlLWRlc2Fycm9s/bG8teS1jb2RpZmlj/YWNpJUMzJUIzbi1k/ZWwtZGlzZSVDMyVC/MW8td2ViLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1iMk5r/cXhXMUQ5OE9OdWpX/OWpWLS1WYnJJd3pn/TDY2V3dFdTJ2d3k2/VkJrPQ"/>
                  <p className="bg-white font-bold text-center">juego de c++</p>
                </figure>
                <figure className="">
                  <img className="w-96" src="https://imgs.search.brave.com/uVCXXfwR6sII7k61yLpOgj39kCpn1zwXAPB924xEOg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/OTg1NDIyMS9lcy9m/b3RvL2NvbmNlcHRv/LWRlLWRlc2Fycm9s/bG8teS1jb2RpZmlj/YWNpJUMzJUIzbi1k/ZWwtZGlzZSVDMyVC/MW8td2ViLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1iMk5r/cXhXMUQ5OE9OdWpX/OWpWLS1WYnJJd3pn/TDY2V3dFdTJ2d3k2/VkJrPQ"/>
                  <p className="bg-white font-bold text-center">juego de c++</p>
                </figure>
                <figure className="">
                  <img className="w-96" src="https://imgs.search.brave.com/uVCXXfwR6sII7k61yLpOgj39kCpn1zwXAPB924xEOg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/OTg1NDIyMS9lcy9m/b3RvL2NvbmNlcHRv/LWRlLWRlc2Fycm9s/bG8teS1jb2RpZmlj/YWNpJUMzJUIzbi1k/ZWwtZGlzZSVDMyVC/MW8td2ViLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1iMk5r/cXhXMUQ5OE9OdWpX/OWpWLS1WYnJJd3pn/TDY2V3dFdTJ2d3k2/VkJrPQ"/>
                  <p className="bg-white font-bold text-center">juego de c++</p>
                </figure>
              </section>
              <section className="flex gap-2 justify-center">
                <figure className="">
                  <img className="w-96" src="https://imgs.search.brave.com/uVCXXfwR6sII7k61yLpOgj39kCpn1zwXAPB924xEOg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/OTg1NDIyMS9lcy9m/b3RvL2NvbmNlcHRv/LWRlLWRlc2Fycm9s/bG8teS1jb2RpZmlj/YWNpJUMzJUIzbi1k/ZWwtZGlzZSVDMyVC/MW8td2ViLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1iMk5r/cXhXMUQ5OE9OdWpX/OWpWLS1WYnJJd3pn/TDY2V3dFdTJ2d3k2/VkJrPQ"/>
                  <p className="bg-white font-bold text-center">juego de c++</p>
                </figure>
                <figure className="">
                  <img className="w-96" src="https://imgs.search.brave.com/uVCXXfwR6sII7k61yLpOgj39kCpn1zwXAPB924xEOg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/OTg1NDIyMS9lcy9m/b3RvL2NvbmNlcHRv/LWRlLWRlc2Fycm9s/bG8teS1jb2RpZmlj/YWNpJUMzJUIzbi1k/ZWwtZGlzZSVDMyVC/MW8td2ViLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1iMk5r/cXhXMUQ5OE9OdWpX/OWpWLS1WYnJJd3pn/TDY2V3dFdTJ2d3k2/VkJrPQ"/>
                  <p className="bg-white font-bold text-center">juego de c++</p>
                </figure>
                <figure className="">
                  <img className="w-96" src="https://imgs.search.brave.com/uVCXXfwR6sII7k61yLpOgj39kCpn1zwXAPB924xEOg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/OTg1NDIyMS9lcy9m/b3RvL2NvbmNlcHRv/LWRlLWRlc2Fycm9s/bG8teS1jb2RpZmlj/YWNpJUMzJUIzbi1k/ZWwtZGlzZSVDMyVC/MW8td2ViLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1iMk5r/cXhXMUQ5OE9OdWpX/OWpWLS1WYnJJd3pn/TDY2V3dFdTJ2d3k2/VkJrPQ"/>
                  <p className="bg-white font-bold text-center">juego de c++</p>
                </figure>
              </section>
          </section>
           <section>
           <h2 className="text-white text-center text-5xl font-bold mb-5">Empresas</h2>
             
          </section>
      </main>
   </Layout>
  )
}

