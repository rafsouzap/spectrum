import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImage from '../../assets/images/spectrum-logo.svg';
import landingImage from '../../assets/images/landing.svg';
import peopleIcon from '../../assets/images/icons/people.svg';
import heartAddIcon from '../../assets/images/icons/heartadd.svg';

function Landing(): ReactElement {
	return (
		<div id="page-landing">
			<div id="page-landing-left-content">
				<div className="content">
					<img src={logoImage} alt="Spectrum" />
					<h2>
						Uma plataforma de especialistas unidos por um objetivo transformador: mudar vidas!
					</h2>
					<p className="p">
						Acreditamos no poder da união e do conhecimento multidisciplinar e especializado para
						oferecer cuidado de qualidade, impulsionando a inclusão e o pleno desenvolvimento das
						pessoas no Espectro Autista. Junte-se a nós nessa jornada, onde a ciência se une ao
						coração, fazendo a diferença em cada passo do caminho.
					</p>
					<div className="buttons-container">
						<Link to="/find-specialties" className="find-specialties">
							<img src={peopleIcon} alt="Buscar especialistas" />
							Buscar Especialistas
						</Link>
						<Link to="/offer-services" className="offer-services">
							<img src={heartAddIcon} alt="Oferecer atendimento" />
							Oferecer Atendimento
						</Link>
					</div>
				</div>
			</div>
			<div id="page-landing-right-content">
				<div className="content">
					<img src={landingImage} alt="Plataforma de especialistas" />
				</div>
			</div>
		</div>
	);
}

export default Landing;
