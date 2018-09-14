import React, { Component } from 'react'
import { home as h } from '../styles/index'
import { MainButton, Parallax } from '../components/index'
import * as cfg from '../config'

export default class Home extends Component {
	render() {
		return (
			<Parallax>
				<h.container>
					<h.title style={{marginBottom: '80px'}}>{cfg.strings.home_title}</h.title>
					<h.text>{cfg.strings.home_text_1}</h.text>
					<h.text>{cfg.strings.home_text_2}</h.text>
					<h.text>{cfg.strings.home_text_3}</h.text>
					<h.stitle style={{marginTop: '100px'}}>{cfg.strings.home_stitle}</h.stitle>
					<h.btnsContainer>
						{cfg.links.map((link, index) => {
							return <MainButton exitSite key={index} linkUrl={link.url} linkTitle={link.title} />
						})}
					</h.btnsContainer>
				</h.container>
			</Parallax>
		)
	}
}