import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-dark-theme);
  height: 100vh;

  .container-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 535px;

    .header-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;

      .header-box {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        .btn-theme {
          background: none;
          cursor: pointer;
          border: none;
          outline: none;
          display: flex;
          align-items: center;
          color: var(--color-dark-theme);
          font-family: 'IBM Plex Mono';
          font-weight: 600;
          font-size: 11px;
          gap: 10px;

          img {
            filter: invert(93%) sepia(16%) saturate(115%) hue-rotate(191deg)
              brightness(99%) contrast(94%);
            height: fit-content;
            width: 15px;
          }
        }
      }
      .input-box {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 8px 8px 8px 25px;
        background-color: var(--card-dark-theme);
        border-radius: 12px;

        img {
          filter: invert(48%) sepia(66%) saturate(7496%) hue-rotate(200deg)
            brightness(102%) contrast(98%);
        }

        .inpt-search {
          background: none;
          outline: none;
          border: none;
          width: 76%;
          font-family: 'Space Mono';
          font-size: 15px;
          color: var(--color-dark-theme);

          &::placeholder {
            color: var(--color-dark-theme);
            font-family: 'Space Mono';
            font-size: 15px;
          }
        }

        .btn-search {
          height: 35px;
          width: 14%;
          border-radius: 8px;
          outline: none;
          border: none;
          background-color: var(--blue-button);
          font-family: 'Space Mono';
          font-size: 14px;
          font-weight: 600;
          color: var(--color-dark-theme);
          cursor: pointer;

          transition: all ease 0.2s;

          &:hover {
            background-color: var(--blue-button-hover);
          }
        }
      }
    }
    .card {
      width: 100%;
      display: flex;
      background: var(--card-dark-theme);
      padding: 40px;
      gap: 40px;
      border-radius: 12px;

      .avatar {
        clip-path: circle(50% at 50% 50%);
        height: fit-content;
        width: 20%;
      }

      .content-card {
        width: 75%;
        .introduction-titles-joined {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .titles {
            font-family: 'IBM Plex Mono';
            margin-bottom: 15px;
            h2 {
              color: var(--color-dark-theme);
              font-size: 22px;
            }

            p {
              color: var(--blue-button);
              font-size: 12px;
            }
          }
          .joined {
            font-family: 'Space Mono';
            color: var(--color-dark-theme);
            font-size: 12px;
            margin-bottom: 20px;
          }
        }

        .bio {
          color: var(--color-dark-theme);
          font-family: 'Space Mono';
          margin-bottom: 20px;
          font-size: 14px;
          word-wrap: break-word;
          width: 100%;
        }

        .bio-not-available {
          color: var(--not-available);
        }

        .box-follow {
          display: flex;
          width: 100%;
          align-items: flex-start;
          justify-content: space-around;
          padding: 10px;
          background-color: var(--bg-dark-theme);
          border-radius: 12px;
          color: var(--color-dark-theme);
          font-family: 'Space Mono';
          margin-bottom: 30px;

          .info-follow {
            display: flex;
            flex-direction: column;

            .info-follow-title {
              font-size: 12px;
            }

            .info-follow-number {
              font-size: 18px;
              font-weight: 600;
            }
          }
        }
        .box-info {
          display: flex;
          color: var(--color-dark-theme);
          gap: 40px;
          font-family: 'Space Mono';
          font-size: 12px;
          width: 100%;

          .row {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 50%;

            .info {
              display: flex;
              gap: 10px;
              align-items: center;

              p {
                word-wrap: break-word;
                width: 100%;
              }

              img {
                filter: invert(93%) sepia(16%) saturate(115%) hue-rotate(191deg)
                  brightness(99%) contrast(94%);
              }
            }

            .info-not-available {
              p {
                color: var(--not-available);
              }

              img {
                filter: invert(65%) sepia(13%) saturate(335%) hue-rotate(189deg)
                  brightness(88%) contrast(87%);
              }
            }
          }
        }
      }
    }
    .is-hidden {
      display: none;
    }
    .position-top {
      justify-content: flex-start;
    }
  }
  @media (max-width: 768px) {
    .container-content {
      width: 85%;
      height: 740px;

      .header-container {
        gap: 30px;
        .header-box {
          .btn-theme {
            font-size: 13px;

            img {
              width: 19px;
            }
          }
        }
        .input-box {
          .inpt-search {
            font-size: 11px;

            &::placeholder {
              font-size: 11px;
            }
          }

          .btn-search {
            width: 25%;
            font-size: 12px;
          }
        }
      }
      .card {
        padding: 30px;
        position: relative;

        .avatar {
          position: absolute;
          width: 30%;
        }
        .content-card {
          width: 100%;

          .introduction-titles-joined {
            flex-direction: column;
            align-items: flex-end;

            .titles {
              margin-bottom: 8px;

              h2 {
                margin-bottom: 8px;
              }
            }

            .joined {
              margin-bottom: 30px;
            }
          }
          .bio {
            font-size: 13px;
            margin-bottom: 30px;
          }
          .box-info {
            flex-direction: column;
            gap: 20px;

            .row {
              width: 90%;
            }
          }
        }
      }
    }
  }
`
