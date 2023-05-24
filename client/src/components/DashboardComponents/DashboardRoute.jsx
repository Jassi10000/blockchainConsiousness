import React, { useState } from 'react'
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom'
import Magazine from './Magazine';
import Spritual from './Spritual';
import Radio from './Radio';
import Encyclopedia from './Encyclopedia';
import Clarity from './Clarity';
import magazineImage1 from '../../assets/magazine.png';
import magazineImage2 from '../../assets/magazine.png'
import spritualImage1 from "../../assets/ubuntu.png";
import spritualImage2 from "../../assets/ubuntu.png";
import radioImage1 from '../../assets/radio.png';
import radioImage2 from '../../assets/radio.png';
import encyclopediaImage1 from '../../assets/encyclopedia.png'
import encyclopediaImage2 from '../../assets/encyclopedia.png'
import clarityImage1 from "../../assets/clarity.png";
import clarityImage2 from "../../assets/clarity.png";
import mainPostImage from "../../assets/mainPostImage.png";
import { Button, Modal, Form, Upload } from 'antd';

const StyledDashboardroute = styled.div`
  /* width: 66vw; */
  height: 90.5vh;
  /* border: 1px solid black; */
  padding: 20px;
`;

const Main = styled.div`
  width: 61vw;
  height: 90.5vh;
  overflow: auto;
  overflow-y: scroll;
  padding: 30px;
  align-items: center;
`;

const ImageDiv = styled.div`
    height: 240px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${mainPostImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid black;
`;

const Text = styled.p`
  
    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: #F3F3F3;
`

const ProposeContentDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 32px 0;
    padding: 5px 0;
`;

const StyledButton1 = styled(Button)`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    gap: 10px;
    width: 187px;
    height: 43px;
    background: #876445;
    border: 4px solid #876445;
    border-radius: 8px;
    font-size: 16px;
    span{
        color: #fff;
        font-weight: bold;
    }
`;

const StyledButton2 = styled(Button)`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    gap: 10px;
    width: 187px;
    height: 42px;
    background: #fff;
    border: 1px solid #876445;
    border-radius: 8px;
    font-size: 16px;
    span{
        color: #876445;
        font-weight: bold;
    }
`;

const ComboBtn = styled.div`
    width: 37%;
`

const routesData = [
    {
        id: 1,
        route: 'Magazine',
        post: [
            {
                postId: 1,
                title: 'Can Decentralization really be decentralized?',
                subText: 'The primary goal of decentralization is power sharing and equitable inclusion but this does not always seem to be the case in some community scenarios',
                publisher: 'Joy and Chaos',
                image: magazineImage1
            },
            {
                postId: 2,
                title: ' NFTs: The power of exclusivity and leverage for creators',
                subText: ' By creating an almost immutable mechanism for token/media exchange, the blockchain is actively revolutionizing the art world and exclusive membership communities',
                publisher: 'Aberdeen Youssef', 
                image: magazineImage2
            }
        ]
    },
    {
        id: 2,
        route: 'Spritual',
        post: [
            {
                postId: 1,
                title: 'How Nodes Teach Self Wholeness and Healthy Social Engagement ?',
                subText: 'A blockchain works by a consensus agreement which is tailored to the invidual benefit of each participating node while the nodes are acrively involved in securing the network and maintaining the blockchain`s function',
                publisher: 'Satoshi Vitelik',
                image: spritualImage1
            },
            {
                postId: 2,
                title: ' Salvation as a function of Integrity of Self',
                subText: 'There are many religions that exist and various belief systems that accompany these religions. Does this mean that there exist many truths?',
                publisher: 'Dalai Munshen', 
                image: spritualImage2
            }
        ]
    },
    {
        id: 3,
        route: 'Radio',
        post: [
            {
                postId: 1,
                title: 'Tune in to the Future of Technology and Finance',
                subText: 'Explore the latest developments in blockchain technology, cryptocurrencies, and decentralised finance on Blockchain Radio, your trusted source for insightful discussions and expert interviews.',
                publisher: ' Blockchain Media Group',
                image: radioImage1
            },
            {
                postId: 2,
                title: ' Amplifying the Voice of Decentralization',
                subText: 'Join us on Blockchain Radio as we dive deep into the world of decentralisation, exploring how blockchain technology is reshaping industries, empowering individuals, and driving innovation.',
                publisher: 'Decentralised Waves Broadcasting', 
                image: radioImage2
            }
        ]
    },
    {
        id: 4,
        route: 'Encyclopedia',
        post: [
            {
                postId: 1,
                title: ' A Comprehensive Guide to Understanding Blockchain Technology',
                subText: ' Blockchain technology is revolutionising various industries by providing secure and transparent solutions. Dive into this comprehensive guide to unravel the complexities and potential applications of blockchain. ',
                publisher: ' Crypto Jack',
                image: encyclopediaImage1
            },
            {
                postId: 2,
                title: ' Unlocking the Power of Distributed Ledger Technology',
                subText: 'Discover the inner workings and potential applications of blockchain technology with our comprehensive Blockchain Encyclopedia.',
                publisher: 'Blockchain Insights', 
                image: encyclopediaImage2
            }
        ]
    },
    {
        id: 5,
        route: 'Clarity',
        post: [
            {
                postId: 1,
                title: 'Unravelling the Mysteries of Decentralization',
                subText: 'The primary goal of decentralisation is power sharing and equietable inclusion, but this does not always seem to be the case in some community scenarios',
                publisher: 'Joy and Chaos',
                image: clarityImage1
            },
            {
                postId: 2,
                title: ' NFTs: The power of exclusivity and leverage for creators',
                subText: ' By creating an almost immutable mechanism for token/media exchange, the blockchain is actively revolutionizing the art world and exclusive membership communities',
                publisher: 'Aberdeen Youssef', 
                image: clarityImage2
            }
        ]
    }
]

const routeContent = (route) => {
  let renderRouteComponent;
  if (route === "Magazine") {
    renderRouteComponent = <Magazine postData={routesData[0].post} />;
  } else if (route === "Spritual") {
    renderRouteComponent = <Spritual postData={routesData[1].post} />;
  } else if (route === "Radio") {
    renderRouteComponent = <Spritual postData={routesData[2].post} />;
  } else if (route === "Encyclopedia") {
    renderRouteComponent = <Encyclopedia postData={routesData[3].post} />;
  } else if (route === "Clarity") {
    renderRouteComponent = <Clarity postData={routesData[4].post} />;
  }

  return renderRouteComponent;
};

const DashboardRoute = () => {
    let typeOfUser = 'nft';
    const params = useParams();
    const [newcontentModal , setNewContentModal] = useState(false);
    return (
      <Main>
        <ImageDiv>
          <Text>Spirituality. Community. Enterprise.</Text>
        </ImageDiv>

        <ProposeContentDiv>
          {typeOfUser === "regular" ? (
            <StyledButton1>+ Propose Content</StyledButton1>
          ) : (
            <ComboBtn
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <StyledButton1>+ Create Topic</StyledButton1>
              <StyledButton2 onClick={() => setNewContentModal(true)}>
                + Propose Content
              </StyledButton2>
            </ComboBtn>
          )}
        </ProposeContentDiv>
        <StyledDashboardroute>
          {routeContent(params.route)}
        </StyledDashboardroute>
        {
          <Modal 
            title="Create New Proposal" 
            open={newcontentModal} 
            centered
            okText="Submit"
            cancelText="Cancel"
            onOk={() => setNewContentModal(false)}
            onCancel={() => setNewContentModal(false)}
          >
            {/* <Form>
              <Form.Item label="Dragger">
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                >
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Form> */}
          </Modal>
        }
      </Main>
    );
}

export default DashboardRoute