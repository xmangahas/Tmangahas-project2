const mongoose = require('./connection')

const seeds = require("./seeds.json");

const Project = require('./models/Project')
const Part = require('./models/Part')

Project.deleteMany({}).then(() => {
    console.log('deleted all projects')
    Part.deleteMany({}).then(() => {
      console.log('deleted all parts')
  
      // create a project
      Project.create({
        name: "Brake Upgrade",
        description: "n/a",
        totalProjectPrice: 1168.99
      })
      .then(brakeUpg => {
        // create two parts and associate one with the project
        Part.create({
          partName: "DBA 4000 Series Slotted Rotors (Front)",
          partNo: "DBA42314S",
          quantity: 2,
          pricePer: 274.04,
          totalPartPrice: 548.08,
          linkToPart: "https://conceptzperformance.com/dba-4000-t3-series-sport-akebono-calipers-front-slotted-nissan-370z-infiniti-g37-q50-q60-q70-m37-m56-fx50-42314s-kt_p_28534.php",
          ref: "https://www.myg37.com/forums/brakes-and-suspension/289209-dba-t3-4000-rotors-hawk-hps-pads-goodridge-ss-lines-motul-5-1-fluid.html",
          notes: "n/a",
          installed: false,
          projInc: brakeUpg.id
        })
        .then(dbaF => {
          brakeUpg.partInc.push(dbaF)
          brakeUpg.save()
          console.log('created Brake Uprade: Rotor Front')
        })
  
        Part.create({
          partName: "DBA 4000 Series Slotted Rotors (Rear)",
          partNo: "DBA42315S",
          quantity: 2,
          pricePer: 199.85,
          totalPartPrice: 399.70,
          linkToPart: "https://knsbrakes.com/c/car-series/1324_2013+Infiniti+G37+Sport+with+Akebono+Calipers/264_DBA+T3+ClubSpec+4000+Series+Slotted+Rotor+-+Single+Rotor",
          refLink: "https://www.myg37.com/forums/brakes-and-suspension/289209-dba-t3-4000-rotors-hawk-hps-pads-goodridge-ss-lines-motul-5-1-fluid.html",
          notes: "n/a",
          installed: false,
        })
        .then(() => {
          console.log('created Brake Uprade: Rotor Rear')
        })

        Part.create({
            partName: "Project Mu B-FORCE Brake Pads (Front)",
            partNo: "PBF210",
            quantity: 1,
            pricePer: 114.42,
            totalPartPrice: 114.42,
            linkToPart: "https://conceptzperformance.com/project-mu-b-force-brake-pads-sport-model-w-akebono-calipers-front-nissan-370z-infiniti-g37-q50-q60-q70-m37-m56-fx50-pbf210_p_14540.php",
            refLink: "https://www.myg37.com/forums/brakes-suspension/259619-tunerz-store-infiniti-g37-sport-project-mu-brake-pads.html",
            notes: "n/a",
            installed: false,
          })
          .then(() => {
            console.log('created Brake Uprade: Pads Front')
          })

        Part.create({
            partName: "Project Mu B-FORCE Brake Pads (Rear)",
            partNo: "PBR210",
            quantity: 1,
            pricePer: 106.79,
            totalPartPrice: 106.79,
            linkToPart: "https://conceptzperformance.com/project-mu-b-force-brake-pads-sport-model-w-akebono-calipers-rear-nissan-370z-infiniti-g37-q50-q60-q70-m37-m56-fx50-pbr210_p_14574.php",
            refLink: "https://www.myg37.com/forums/brakes-suspension/259619-tunerz-store-infiniti-g37-sport-project-mu-brake-pads.html",
            notes: "n/a",
            installed: false,
          })
          .then(() => {
            console.log('created Brake Uprade: Pads Rear')
          })
      })
  
  
      Project.create({
        name: "New Wheels",
        description: "n/a",
        totalProjectPrice: 2899.96
      })
      .then(wheelUpg => {
        // create two parts and associate one with the project
        Part.create({
          partName: "Work Emotion T7R Wheel",
          partNo: "DBA42314S",
          quantity: 4,
          pricePer: 480.00,
          totalPartPrice: 1920.00,
          linkToPart: "https://www.evasivemotorsports.com/store/product/work-emotion-t7r-wheel-19x95-offset-25/",
          refLink: "https://www.myg37.com/forums/build-threads/257609-ryne-s-graphite-shadow-awd-g37-coupe.html",
          notes: "19x9.5 offset +25, 5x114.3",
          installed: false,
          projInc: wheelUpg.id
        })
        .then(t7r => {
          wheelUpg.partInc.push(t7r)
          wheelUpg.save()
          console.log('created Wheels Uprade: Wheels')
        })
  
        Part.create({
          partName: "Michelin Pilot Sport AS 3+",
          partNo: "n/a",
          quantity: 4,
          pricePer: 244.99,
          totalPartPrice: 979.96,
          linkToPart: "https://www.tirerack.com/tires/tires.jsp?tireMake=Michelin&tireModel=Pilot+Sport+A%2FS+3%2B+%28W-+or+Y-Speed+Rated%29&partnum=54YR9PSAS3PLXL&vehicleSearch=false&fromCompare1=yes",
          ref: "https://www.myg37.com/forums/brakes-suspension-wheels-and-tires/274925-michelin-pilot-sport-a-s-3-first-look-review.html",
          notes: "255/40 19",
          installed: false,
        })
        .then(() => {
          console.log('created Wheels Uprade: Tires')
        })

      })
    })
  })