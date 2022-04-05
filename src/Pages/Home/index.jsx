import React from "react";
import logoIcon from '../../assets/logo.svg'
import lightIcon from '../../assets/light-icon.svg'
import searchIcon from '../../assets/search-icon.svg'
import avatarImg from '../../assets/octocat.jpg'
import locationIcon from '../../assets/location-icon.svg'
import linkIcon from '../../assets/link-icon.svg'
import twitterIcon from '../../assets/twitter-icon.svg'
import companyIcon from '../../assets/business-icon.svg'

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <div className="container-content">
        <div className="header-box">
          <img src={logoIcon} alt="Logo" className="logo" />
          <button className="btn-theme">LIGHT<img src={lightIcon} alt="Light icon" /></button>
        </div>
        <form className="input-box">
          <img src={searchIcon} alt="Search Icon" />
          <input
            type="text"
            name="inpt-search"
            className="inpt-search"
            placeholder="Search GitHub username..."
          />
          <button className="btn-search">Search</button>
        </form>
        <div className="card">
          <img src={avatarImg} alt="Github Octocat" className="avatar" />
          <div className="content-card">
            <div className="introduction-titles-joined">
              <div className="titles">
                <h2>The Octocat</h2>
                <p>@octocat</p>
              </div>
              <div className="joined-box">
                <p className="joined">Joined 25 Jan 2011</p>
              </div>
            </div>
            <p className="bio">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore incidunt fuga facere labore ipsam.</p>
            <div className="box-follow">
              <div className="info-follow">
                <p className="info-follow-title">Repos</p>
                <p className="info-follow-number">8</p>
              </div>
              <div className="info-follow">
                <p className="info-follow-title">Followers</p>
                <p className="info-follow-number">3938</p>
              </div>
              <div className="info-follow">
                <p className="info-follow-title">Following</p>
                <p className="info-follow-number">9</p>
              </div>
            </div>
            <div className="box-info">
              <div className="row">
                <div className="info">
                  <img src={locationIcon} alt="Location icon" />
                  <p>San Francisco</p>
                </div>
                <div className="info">
                  <img src={linkIcon} alt="Link Icon" />
                  <p>https://github.com.blog</p>
                </div>
              </div>
              <div className="row">
                <div className="info">
                  <img src={twitterIcon} alt="Twitter icon" />
                  <p>@github</p>
                </div>
                <div className="info">
                  <img src={companyIcon} alt="Business Icon" />
                  <p>@github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}