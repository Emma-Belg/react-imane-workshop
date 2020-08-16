import React, {useState, useEffect} from 'react';
import {useHistory, useParams}  from "react-router-dom";
import axios from 'axios';
import Card from "../../components/cards/Cards";
import './profile.scss';

function Profile() {

    const {slug} = useParams();
    const [profile, setProfile] = useState([]);
    const [repositories, setRepositories] = useState([]);
    const  backupImg  ='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/6554645/original/kirby_gusta_by_dark_saito-d3gvx6c/give-a-derp-face.jpg'
    const history  = useHistory();


    useEffect(()=>{
      async function fetchData(){
          const profile = await
              axios.get(`https://api.github.com/users/${slug}`)
                  //.then( //here u handle request)
                  setProfile(profile.data);
          const repositories = await
              axios.get(`https://api.github.com/users/${slug}/repos`)
                //.then( //here u handle request)
          setRepositories(repositories.data);
          history.push(`/profile/${slug}`);
      }
      fetchData();

    },[slug, history]);


    //this generates random colors
    let color;
    function randomColor() {
        //generate random color
        let r, g, b;
        //change bg color
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
         return color = `rgb(${r},${g},${b})`;
    };
    randomColor();

console.log(repositories)
    return(

            <section className="listOfCards">
            <div className={'list'}>
                <div className="cards">
                    {
                        repositories.length !== 0
                        ?
                            repositories.map((project, i) =>{

                                randomColor();

                                return <Card
                                    key={i}
                                    img={``}
                                    projectName={project.name}
                                    projectLink={project.homepage}
                                    bgColor={color}
                                    githubLink ={project.html_url}
                                    projectDescription={'add a project description'}
                                />

                            })
                            :
                            <>
                            <Card
                                img={``}
                                projectName={'project title'}
                                projectDescription={'Add project description'}
                                projectLink={'website link'}
                                GithubLink={'github link'}
                                bgColor={randomColor()}

                            />
                        <Card
                        img={``}
                        projectName={'project title'}
                        projectDescription={'Add project description'}
                        projectLink={'website link'}
                        GithubLink={'github link'}
                        bgColor={randomColor()}

                        />
                        <Card
                        img={``}
                        projectName={'project title'}
                        projectDescription={'Add project description'}
                        projectLink={'website link'}
                        GithubLink={'github link'}
                        bgColor={randomColor()}

                        />
                        <Card
                        img={``}
                        projectName={'project title'}
                        projectDescription={'Add project description'}
                        projectLink={'website link'}
                        GithubLink={'github link'}
                        bgColor={randomColor()}

                        />
                        </>
                    }

                </div>
            </div>
            </section>
    );

}

export  default Profile