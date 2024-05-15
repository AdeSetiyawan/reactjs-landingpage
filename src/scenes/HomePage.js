import React from 'react'
import Section from 'elements/Section'
import Cards from 'elements/Cards'
import Lists from 'elements/Lists'
import Button from 'elements/Button'
import Header from 'parts/Header'
import Clients from 'parts/Clients'
import Footer from 'parts/Footer'
import Feature from 'parts/Feature'
import HeroImages from 'assets/images/hero-image.png'

import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import Feature01 from 'assets/images/feature-tile-icon-01.svg'
import Feature02 from 'assets/images/feature-tile-icon-02.svg'
import Feature03 from 'assets/images/feature-tile-icon-03.svg'
import Feature04 from 'assets/images/feature-tile-icon-04.svg'
import Feature05 from 'assets/images/feature-tile-icon-05.svg'
import Feature06 from 'assets/images/feature-tile-icon-06.svg'

export default function HomePage() {

    const features = [
        {
            imgScr:Feature01,
            imgAlt:"Feature Tiles 01",
            title:"Bergaung di komunitas Ade Setiyawan",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu mattis aliquam, nunc nisl aliqu",
        },
        {
            imgScr:Feature02,
            imgAlt:"Feature Tiles 02",
            title:"Bergaung di komunitas Ade Setiyawan",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu mattis aliquam, nunc nisl aliqu",
        },
        {
            imgScr:Feature03,
            imgAlt:"Feature Tiles 03",
            title:"Bergaung di komunitas Ade Setiyawan",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu mattis aliquam, nunc nisl aliqu",
        },
        {
            imgScr:Feature04,
            imgAlt:"Feature Tiles 04",
            title:"Bergaung di komunitas Ade Setiyawan",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu mattis aliquam, nunc nisl aliqu",
        },
        {
        imgScr:Feature05,
        imgAlt:"Feature Tiles 05",
        title:"Bergaung di komunitas Ade Setiyawan",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu mattis aliquam, nunc nisl aliqu",
        },
        {
        imgScr:Feature06,
        imgAlt:"Feature Tiles 06",
        title:"Bergaung di komunitas Ade Setiyawan",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu mattis aliquam, nunc nisl aliqu",
        }
    ]




    const listPricing =[
        {
            price:27,
            currencySymbol:"$",
            description:"Lorem ipsum is a common text",
            feature:[
                {isChecked:true,content:"Excepteur sint occaecat velit"},
                {isChecked:true,content:"Excepteur sint occaecat velit"},
                {isChecked:true,content:"Excepteur sint occaecat velit"},
                {isChecked:false,content:"Excepteur sint occaecat velit"},
                {isChecked:false,content:"Excepteur sint occaecat velit"},
                {isChecked:false,content:"Excepteur sint occaecat velit"}
            ]
        },
        {
            price:47,
            currencySymbol:"$",
            description:"Lorem ipsum is a common text",
            feature:[
                {isChecked:true,content:"Excepteur sint occaecat velit"},
                {isChecked:true,content:"Excepteur sint occaecat velit"},
                {isChecked:true,content:"Excepteur sint occaecat velit"},
                {isChecked:true,content:"Excepteur sint occaecat velit"},
                {isChecked:false,content:"Excepteur sint occaecat velit"},
                {isChecked:false,content:"Excepteur sint occaecat velit"}
            ]
        },
        {
            price:67,
            currencySymbol:"$",
            description:"Lorem ipsum is a common text",
            feature:[
                {isChecked: true,content:"Excepteur sint occaecat velit"},
                {isChecked:true,content:"Excepteur sint occaecat velit"},
                {isChecked:true,content:"Excepteur sint occaecat velit"},
                {isChecked:true,content:"Excepteur sint occaecat velit"},
                {isChecked:true,content:"Excepteur sint occaecat velit"},
                {isChecked:true,content:"Excepteur sint occaecat velit"}
            ]
        }
    ]


  return (
 <div className='body-wrap'>
    <Header></Header>
    <main className='site-content'>
        <Section isCenteredContent className='hero illustration-section-01'>
        <div className="container-sm">
						<div className="hero-inner section-inner">
							<div className="hero-content">
								<h1
									className="mt-0 mb-16"
								>
                                <Slide direction="down" duration={2000} delay={500}>
									Landing template for startups
                                </Slide>
								</h1>

                                <Fade duration={4000}>

								<div className="container-xs">
									<p
										className="mt-0 mb-32"
                                        >
										Our landing page template works on all
										devices, so you only have to set it up
										once, and get beautiful results forever.
									</p>
								</div>
                                </Fade>
							</div>
							<div
								className="hero-figure illustration-element-01"
					
								
							>
                                <Fade duration={3500}>

								<img
									className="has-shadow"
									src={HeroImages}
									alt="Hero"
									width="896"
									height="504"
                                    />
                                    </Fade>

							</div>
						</div>
					</div>
        </Section>

        <Clients></Clients>
        <Section className='feature-tiles'>
            <div class="container">
                <div class="features-tiles-inner section-inner">
                    <div class="tiles-wrap">
                        {
                            features.map((feature, index)=>
                            <Feature
                                key={index}
                               delayInMS={index * 500} 
                               data={feature}
                            ></Feature>
                            )
                        }


                    </div>
                </div>
            </div>
        </Section>

        <Section className='pricing'>
        <div className="container">
            <div
                className="pricing-inner section-inner has-top-divider"
            >
                <div className="section-header center-content">
                    <div className="container-xs">
                        <h2 className="mt-0 mb-16">
                            Simple, transarent pricing
                        </h2>
                        <p className="m-0">
                            Lorem ipsum is common placeholder text
                            used to demonstrate the graphic elements
                            of a document or visual presentation.
                        </p>
                    </div>
                </div>
                <div className="tiles-wrap">
                    {
                        listPricing.map((list,index)=>
                    <Fade delay={index *500}>
                            <Cards hasShadow >
                                <div className="pricing-item-content">
                                    <div
                                        className="pricing-item-header pb-24 mb-24"
                                    >
                                        <div
                                            className="pricing-item-price mb-4"
                                        >
                                            <span
                                                className="pricing-item-price-currency h2"
                                                >{list.currencySymbol}</span
                                            ><span
                                                className="pricing-item-price-amount h1 pricing-switchable"
                                                data-pricing-monthly="34"
                                                data-pricing-yearly="27"
                                                >{list.price}</span
                                            >
                                        </div>
                                        <div
                                            className="text-xs text-color-low"
                                        >
                                            {list.description}
                                        </div>
                                    </div>
                                    <div
                                        className="pricing-item-features mb-40"
                                    >
                                        <div
                                            className="pricing-item-features-title h6 text-xs text-color-high mb-24"
                                        >
                                            What’s included
                                        </div>


                                        <Lists data={list.feature} isSmall className="pricing-item-features-list mb-32" ></Lists>
                                        
                                    </div>
                                </div>
                                <div class="pricing-item-cta mb-8">
                                   <Button isPrimary isBlock>Start Free Trial</Button>
                                </div>
                            </Cards>
                    </Fade>
                        )
                    }
                </div>
            </div>
            </div>
        </Section>
        </main>
        <Footer></Footer>
 </div>
  )
}
