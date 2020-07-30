import numeral from 'numeral'

const Projects = ({data}) => {
	data = data.sort((projectA, projectB) => projectB.tvl - projectA.tvl)
	Object.keys(data).forEach(key => {
		data[key].rank = Number(key) + 1
		data[key].key = Math.random()
		data[key].style = data[key].percentChangeDay < 0 ? "has-text-danger" : "has-text-success"
	})

  return(
    <section className="section" style={{marginTop: "0px"}}>
		<div className="container">
			<div className="box">
				<div className="table-container">
					<table className="xfi-table table is-fullwidth is-hoverable">
						<thead>
							
							<tr>
								<th className="xfi-rank">Rank</th>
								<th className="xfi-name">Name</th>
								<th className="xfi-chain">Chain</th>
								<th className="xfi-type">Category</th>
								<th className="xfi-locked">Locked</th>
								<th className="xfi-percent">1 Day %</th>
							</tr>
						</thead>

						<tbody>
							{data.map(project => {
								return (<tr>
									<th className="xfi-rank">{project.rank}</th>
									<td className="xfi-name">{project.name}</td>
									<td className="xfi-chain">{project.platform}</td>
									<td className="xfi-type">{project.category}</td>
									<td className="xfi-locked">{numeral(project.tvl).format('$0,0')}</td>
									<th className={`xfi-percent ${project.style}`}>{project.percentChangeDay}%</th>
								</tr>)
								})
							}
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Projects