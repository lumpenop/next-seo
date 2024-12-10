import CompanyBanner from './_view/company-banner/CompanyBanner'
import GovermentBanner from './_view/goverment-banner/GovermentBanner'
import MoreService from './_view/more-service/MoreService'
import Performance from './_view/performance/Performance'
import ServiceIntroduction from './_view/service-introduction/ServiceIntroduction'

function Advertiser() {
  return (
    <div>
      <ServiceIntroduction />
      <Performance />
      <CompanyBanner />
      <GovermentBanner />
      <MoreService />
    </div>
  )
}

export default Advertiser
