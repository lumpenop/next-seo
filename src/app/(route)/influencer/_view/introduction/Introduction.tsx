import { SectionLayout, TitleForm } from '@/components'
import CustomImage from '@/components/custom-image/CustomImage'
import IntroductionBox from './components/introduction-box'
import Image from 'next/image'

function Introduction() {
  return (
    <SectionLayout>
      <TitleForm title="와이리 인플루언서가 되어야 하는 이유!" subtitle="INTRODUCTION">
        <div className="flex flex-col primary:gap-[0.78rem] gap-[1.67vw] w-full">
          <IntroductionBox
            className="bg-[#FFF9ED]"
            title="SNS 채널만 가지고 있다면!"
            description="와이리에서는 타 체험단 사이트와 비교하여<br/>가장 많은 SNS 종류를 승인해드리고 있어요!">
            <div className="flex justify-between bg-gradient-to-r from-white-default to-white-default/20 primary:py-[1.3975rem] primary:px-[2.6rem] primary:mt-[1.5275rem] primary:mb-[2.34rem] py-[2.99vw] px-[5.56vw] mt-[3.26vw] mb-[5vw] box-border">
              <CustomImage
                src="/assets/icons/channel_icon_0.svg"
                alt="네이버 로고"
                w="primary:w-[4.5rem] w-[4.02vw]"
                h="primary:h-[4.5rem] h-[4.02vw]"
              />
              <CustomImage
                src="/assets/icons/channel_icon_1.svg"
                alt="인스타그램 로고"
                w="primary:w-[4.5rem] w-[4.02vw]"
                h="primary:h-[4.5rem] h-[4.02vw]"
              />
              <CustomImage
                src="/assets/icons/channel_icon_2.svg"
                alt="유튜브 로고"
                w="primary:w-[4.5rem] w-[4.02vw]"
                h="primary:h-[4.5rem] h-[4.02vw]"
              />
              <CustomImage
                src="/assets/icons/channel_icon_3.svg"
                alt="틱톡 로고"
                w="primary:w-[4.5rem] w-[4.02vw]"
                h="primary:h-[4.5rem] h-[4.02vw]"
              />
              <CustomImage
                src="/assets/icons/channel_icon_4.svg"
                alt="티스토리 로고"
                w="primary:w-[4.5rem] w-[4.02vw]"
                h="primary:h-[4.5rem] h-[4.02vw]"
              />
              <CustomImage
                src="/assets/icons/channel_icon_5.svg"
                alt="Spring Global 로고"
                w="primary:w-[4.5rem] w-[4.02vw]"
                h="primary:h-[4.5rem] h-[4.02vw]"
              />
            </div>
          </IntroductionBox>
          <IntroductionBox
            className="bg-white-100 relative primary:pb-[3.7375rem] pb-[7.99vw]"
            title="원하는 날짜에 신청가능"
            description="정해진 날짜가 아닌, 원하는 시기에 캠페인을 신청할 수 있습니다. <br/ >이제 본인이 원하는 시기에 체험하세요!">
            <div className="absolute primary:-bottom-[1.1rem] -bottom-[2.3vw] right-0 -z-10">
              <CustomImage
                src="/assets/icons/introduction_calendar.svg"
                alt="introduction 캘린더 아이콘"
                w="primary:w-[12.5rem] w-[26.67vw]"
                h="primary:h-[12.5rem] h-[26.67vw]"
              />
            </div>
          </IntroductionBox>
          <IntroductionBox
            className="bg-primary-200 relative primary:pb-[6.273rem] pb-[13.40vw]"
            title="체험 선정 여부 96시간 이내"
            description="빠른 결과 안내를 통해 여행을 차질 없이 계획해보세요.">
            <div className="absolute  primary:-bottom-[1.4rem] -bottom-[2.9vw] right-0 -z-10">
              <CustomImage
                src="/assets/icons/introduction_check.svg"
                alt="introduction 체크 아이콘"
                w="primary:w-[12.5rem] w-[26.67vw]"
                h="primary:h-[12.5rem] h-[26.67vw]"
              />
            </div>
          </IntroductionBox>
          <IntroductionBox
            className="bg-white-200"
            title="와이리가 인증하는 영향력<br/>등급을 받아보세요"
            description="와이리는 채널에 따라 예상 영향력에 따라서 등급을 부여하고 있습니다.<br/>와이리에서 인증하는 인플루언서가 되어보세요."
            text={
              <p className="font-pretendard font-light text-gray-100 primary:text-[0.91rem] text-[1.94vw]">
                *채널 승급은 매월말에 신청을 받고 있습니다.
              </p>
            }>
            <div className="flex items-end justify-center primary:gap-[2.077rem] gap-[4.44vw]">
              <div className="relative primary:w-[5.906rem] w-[12.62vw] primary:h-[8.779rem] h-[18.76vw]">
                <Image
                  src="/assets/icons/introduction_grade_silver.svg"
                  alt="introduction 실버 등급 아이콘"
                  fill
                  className="object-scale-down"
                />
              </div>
              <div className="relative primary:w-[5.906rem] w-[12.62vw] primary:h-[9.82rem] h-[20.98vw]">
                <Image
                  src="/assets/icons/introduction_grade_gold.svg"
                  alt="introduction 골드 등급 아이콘"
                  fill
                  className="object-scale-down"
                />
              </div>
              <div className="relative primary:w-[5.906rem] w-[12.62vw] primary:h-[10.862rem] h-[23.21vw]">
                <Image
                  src="/assets/icons/introduction_grade_black.svg"
                  alt="introduction 블랙 등급 아이콘"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </IntroductionBox>
        </div>
      </TitleForm>
    </SectionLayout>
  )
}

export default Introduction
