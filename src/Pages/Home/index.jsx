import React, { useContext, useState } from "react";
import logoIcon from '../../assets/logo.svg'
import lightIcon from '../../assets/light-icon.svg'
import darkIcon from '../../assets/dark-icon.svg'
import searchIcon from '../../assets/search-icon.svg'
import locationIcon from '../../assets/location-icon.svg'
import linkIcon from '../../assets/link-icon.svg'
import twitterIcon from '../../assets/twitter-icon.svg'
import companyIcon from '../../assets/business-icon.svg'
import ufoIcon from '../../assets/ufo.svg'
import api from '../../services/api'
import { ThemeContext } from "styled-components";
import ReactFloaterJs from 'react-floaterjs'

import { Container } from "./styles";

export function Home({ toggleTheme }) {
const [repository, setRepository] = useState()
const [username, setUsername] = useState('')
const { title } = useContext(ThemeContext)

  async function getGithubInfo(event) {
    event.preventDefault()
    
    try {
      const response = await api.get(`/users/${username}`)

      setRepository(response.data)
    } catch (error) {
      if (error.response) {
        setRepository(error.response.data.message)
      }
    }
  }

  console.log(repository)

  return (
    <Container>
      <div className="container-content">
        <div 
          className={repository 
            ? "header-container" 
            : "header-container position-top"}
        >
          <div className="header-box">
            <img 
              src={logoIcon} 
              alt="Logo" 
              className={title === "light" 
                ? "logo" 
                : "logo logo-light"} 
            />
            <button 
              className="btn-theme"
              onClick={() => toggleTheme()}
            >
              {title === 'light' 
                      ? 'LIGHT' 
                      : 'DARK'}
              <img 
                src={title === 'light' 
                ? lightIcon 
                : darkIcon} 
                alt="Light icon" 
                className="btn-theme-icon"
              />
            </button>
          </div>
          <form 
            className="input-box" 
            onSubmit={getGithubInfo}
          >
            <img 
              src={searchIcon} 
              alt="Search Icon" 
            />
            <input
              type="text"
              name="inpt-search"
              className="inpt-search"
              placeholder="Search GitHub username..."
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="off"
            />
            <button 
              type="submit" 
              className="btn-search"
            >
              Search
            </button>
          </form>
        </div>
        
        {repository === 'Not Found'
          ? <div className="card-404">
              <div className="content-404">
                <div className="first-404">
                  <p>4</p>
                  <ReactFloaterJs>
                  <img src={ufoIcon} alt="UFO Icon" className="ufo-404" />
                  </ReactFloaterJs>                  
                  <p>4</p>
                </div>
                <p className="text-404">Sorry, this person was abductee.</p>
              </div>
            </div>
          : <div 
              className={repository 
                ? "card" 
                : "card is-hidden"}
              >
              <img 
                src={repository?.avatar_url} 
                alt="Avatar" 
                className="avatar" 
              />
              <div className="content-card">
                <div className="introduction-titles-joined">
                  <div className="titles">
                    <h2>{repository?.name}</h2>
                    <p>@{repository?.login}</p>
                  </div>
                  <div className="joined-box">
                    <p 
                      className="joined"
                    >
                      Joined {new Date(repository?.created_at)
                        .toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      }
                </p>
                  </div>
                  
                </div>
                <p 
                  className={repository?.bio 
                    ? "bio" 
                    : "bio bio-not-available"}
                >
                  {repository?.bio === null 
                    ? 'This profile has no bio...' 
                    : repository?.bio}
                </p>
                <div className="box-follow">
                  <div className="info-follow">
                    <p className="info-follow-title">Repos</p>
                    <p className="info-follow-number">{repository?.public_repos}</p>
                  </div>
                  <div className="info-follow">
                    <p className="info-follow-title">Followers</p>
                    <p className="info-follow-number">{repository?.followers}</p>
                  </div>
                  <div className="info-follow">
                    <p className="info-follow-title">Following</p>
                    <p className="info-follow-number">{repository?.following}</p>
                  </div>
                </div>
                <div className="box-info">
                  <div className="row">
                    <div 
                      className={repository?.location && title === "light"                    
                        ? "info icon-light" 
                        : repository?.location  
                        ? "info"
                        : "info info-not-available"}
                    >
                      <img src={locationIcon} alt="Location icon" />
                      <p>
                        {repository?.location === null 
                          ? 'Not Available' 
                          : repository?.location}
                      </p>
                    </div>

                    <div 
                      className={repository?.blog && title === "light"
                      ? "info icon-light" 
                      : repository?.blog
                      ? "info"
                      : "info info-not-available"}
                    >
                      <img src={linkIcon} alt="Link Icon" />
                      <p>
                        {repository?.blog === "" 
                          ? 'Not Available' 
                          : repository?.blog}
                      </p>
                    </div>

                  </div>
                  <div className="row">
                    <div 
                      className={repository?.twitter_username && title === "light"
                      ? "info icon-light" 
                      : repository?.twitter_username  
                      ? "info"
                      : "info info-not-available"}
                    >
                      <img src={twitterIcon} alt="Twitter icon" />
                      <p>
                        {repository?.twitter_username === null 
                          ? 'Not Available' 
                          : repository?.twitter_username}
                      </p>
                    </div>

                    <div 
                      className={repository?.company && title === "light"
                      ? "info icon-light" 
                      : repository?.company  
                      ? "info"
                      : "info info-not-available"}
                    >
                      <img src={companyIcon} alt="Business Icon" />
                      <p>
                        {repository?.company === null 
                          ? 'Not Available' 
                          : repository?.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    </Container>
  )
}