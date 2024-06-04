const descriptionMd = `Lanao Integrated School`

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, '$1')
  .replace(/\n/g, '')
  .replace(/\s{2,}/g, ' ')
  .trim()

module.exports = {
  title: 'Lanao Integrated School',
  descriptionMd,
  description,
  url: 'https://lanao-integrated-school.vercel.app',
  twitterUsername: '@rpfprogrammer',
  email: 'rpf.programmer@gmail.com',
  socials: {
    GitHub: 'https://github.com/ronnelpf/lanao-integrated-school',
    Twitter: 'https://twitter.com/rpfprogrammer',
  },
  bgColor: '#1A202C',
  themeColor: 'blue.500',
}
