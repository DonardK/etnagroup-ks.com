using AutoMapper;
using EtnaGroup.Api.Models;
using EtnaGroup.Api.DTOs;

namespace EtnaGroup.Api.Profiles;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // Complex mappings
        CreateMap<Complex, ComplexDto>();
        CreateMap<CreateComplexDto, Complex>();
        CreateMap<UpdateComplexDto, Complex>()
            .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

        // Building mappings
        CreateMap<Building, BuildingDto>();
        CreateMap<CreateBuildingDto, Building>();
        CreateMap<UpdateBuildingDto, Building>()
            .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

        // Unit mappings
        CreateMap<Unit, UnitDto>();
        CreateMap<CreateUnitDto, Unit>();
        CreateMap<UpdateUnitDto, Unit>()
            .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

        // Inquiry mappings
        CreateMap<Inquiry, InquiryDto>();
        CreateMap<CreateInquiryDto, Inquiry>();
    }
}
